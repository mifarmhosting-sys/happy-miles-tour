import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { getAdminSession } from "@/services/auth";
import { deleteEnquiry, getEnquiry, updateEnquiry } from "@/services/enquiries";
import type { Enquiry, EnquiryStatus } from "@/types/enquiry";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, Loader2, Mail, Phone, Save, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const statuses: Array<{ value: EnquiryStatus; label: string }> = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In progress" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" },
];

export default function AdminEnquiryDetailPage() {
  const { id } = useParams({ from: "/admin/enquiries/$id" });
  const navigate = useNavigate();
  const numericId = Number(id);
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
  const [status, setStatus] = useState<EnquiryStatus>("new");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const session = await getAdminSession();
        if (!session.authenticated) {
          await navigate({ to: "/admin/login", replace: true });
          return;
        }
        if (!Number.isInteger(numericId) || numericId < 1) throw new Error("Invalid enquiry ID.");
        const response = await getEnquiry(numericId);
        if (!cancelled) {
          setEnquiry(response.data);
          setStatus(response.data.status);
          setNotes(response.data.admin_notes ?? "");
        }
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Unable to load enquiry.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => { cancelled = true; };
  }, [navigate, numericId]);

  async function saveChanges() {
    if (!enquiry || saving) return;
    setSaving(true);
    try {
      await updateEnquiry(enquiry.id, { status, admin_notes: notes.trim() });
      setEnquiry({ ...enquiry, status, admin_notes: notes.trim() || null });
      toast.success("Enquiry updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    if (!enquiry) return;
    setSaving(true);
    try {
      await deleteEnquiry(enquiry.id);
      toast.success("Enquiry deleted.");
      await navigate({ to: "/admin/enquiries", replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to delete enquiry.");
      setSaving(false);
    }
  }

  if (loading) return <div className="min-h-screen grid place-items-center bg-slate-100"><Loader2 className="h-8 w-8 animate-spin text-blue-700" /></div>;
  if (!enquiry) return <div className="min-h-screen grid place-items-center bg-slate-100"><div className="text-center"><p className="text-xl font-semibold">Enquiry unavailable</p><Button asChild variant="link"><Link to="/admin/enquiries">Return to enquiries</Link></Button></div></div>;

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6"><Button asChild variant="ghost" className="mb-3 text-white hover:bg-white/10 hover:text-white"><Link to="/admin/enquiries"><ArrowLeft className="mr-2 h-4 w-4" />Back to enquiries</Link></Button><h1 className="font-display text-3xl font-bold">Enquiry #{enquiry.id}</h1><p className="mt-1 text-white/60">Received {new Date(`${enquiry.created_at}Z`).toLocaleString()}</p></div>
      </header>
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="mb-5 text-xl font-bold text-slate-900">Customer details</h2><div className="grid gap-5 sm:grid-cols-2"><div><p className="text-xs font-semibold uppercase text-slate-400">Name</p><p className="mt-1 font-medium">{enquiry.name}</p></div><div><p className="text-xs font-semibold uppercase text-slate-400">Subject</p><p className="mt-1 font-medium">{enquiry.subject}</p></div><a href={`mailto:${enquiry.email}`} className="flex items-center gap-2 text-blue-700 hover:underline"><Mail className="h-4 w-4" />{enquiry.email}</a><a href={`tel:${enquiry.phone}`} className="flex items-center gap-2 text-blue-700 hover:underline"><Phone className="h-4 w-4" />{enquiry.phone}</a></div></div>
          <div className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="mb-4 text-xl font-bold text-slate-900">Message</h2><p className="whitespace-pre-wrap leading-7 text-slate-700">{enquiry.message}</p></div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-sm"><label htmlFor="detail-status" className="text-sm font-semibold">Status</label><select id="detail-status" value={status} onChange={(event) => setStatus(event.target.value as EnquiryStatus)} className="mt-2 h-10 w-full rounded-md border bg-white px-3 text-sm">{statuses.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select><label htmlFor="admin-notes" className="mt-5 block text-sm font-semibold">Private admin notes</label><Textarea id="admin-notes" value={notes} onChange={(event) => setNotes(event.target.value)} rows={9} maxLength={10000} placeholder="Add follow-up details visible only to administrators..." className="mt-2" /><Button onClick={() => void saveChanges()} disabled={saving} className="mt-4 w-full"><Save className="mr-2 h-4 w-4" />Save changes</Button></div>
          <div className="rounded-2xl border border-red-200 bg-red-50 p-5"><p className="font-semibold text-red-900">Danger zone</p><p className="mt-1 text-sm text-red-700">Deleting an enquiry cannot be undone.</p><Button variant="destructive" className="mt-4 w-full" onClick={() => setConfirmDelete(true)}><Trash2 className="mr-2 h-4 w-4" />Delete enquiry</Button></div>
        </aside>
      </section>
      <AlertDialog open={confirmDelete} onOpenChange={setConfirmDelete}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete enquiry #{enquiry.id}?</AlertDialogTitle><AlertDialogDescription>This permanently deletes the message from {enquiry.name}.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => void remove()} className="bg-red-600 hover:bg-red-700">Delete permanently</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
    </main>
  );
}
