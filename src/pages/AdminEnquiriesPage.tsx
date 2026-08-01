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
import { Input } from "@/components/ui/input";
import { adminLogout, getAdminSession } from "@/services/auth";
import { deleteEnquiry, exportEnquiries, listEnquiries, updateEnquiry } from "@/services/enquiries";
import type { EnquiryStatus, EnquirySummary } from "@/types/enquiry";
import { Link, useNavigate } from "@tanstack/react-router";
import { Download, Eye, Loader2, LogOut, Mail, RefreshCw, Search, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

const statuses: Array<{ value: EnquiryStatus; label: string }> = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In progress" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" },
];

export default function AdminEnquiriesPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState<EnquirySummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [newCount, setNewCount] = useState(0);
  const [deleteTarget, setDeleteTarget] = useState<EnquirySummary | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const session = await getAdminSession();
      if (!session.authenticated) {
        await navigate({ to: "/admin/login", replace: true });
        return;
      }
      const response = await listEnquiries({ search, status, sort, page });
      setItems(response.data);
      setTotalPages(response.pagination.totalPages);
      setTotal(response.counts.total);
      setNewCount(response.counts.new);
    } catch (error) {
      if (error instanceof Error && "status" in error && error.status === 401) {
        await navigate({ to: "/admin/login", replace: true });
      } else {
        toast.error(error instanceof Error ? error.message : "Unable to load enquiries.");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate, page, search, sort, status]);

  useEffect(() => {
    void load();
  }, [load]);

  async function changeStatus(item: EnquirySummary, next: EnquiryStatus) {
    setBusyId(item.id);
    try {
      await updateEnquiry(item.id, { status: next });
      setItems((current) => current.map((row) => row.id === item.id ? { ...row, status: next } : row));
      toast.success("Status updated.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to update status.");
    } finally {
      setBusyId(null);
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    setBusyId(deleteTarget.id);
    try {
      await deleteEnquiry(deleteTarget.id);
      setDeleteTarget(null);
      toast.success("Enquiry deleted.");
      await load();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to delete enquiry.");
    } finally {
      setBusyId(null);
    }
  }

  async function downloadCsv() {
    try {
      const blob = await exportEnquiries({ search, status, sort });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to export enquiries.");
    }
  }

  async function signOut() {
    try {
      await adminLogout();
    } finally {
      await navigate({ to: "/admin/login", replace: true });
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div><h1 className="font-display text-2xl font-bold">Enquiry Dashboard</h1><p className="text-sm text-white/60">Happy Miles Tourism</p></div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" onClick={() => void downloadCsv()}><Download className="mr-2 h-4 w-4" />Export CSV</Button>
            <Button variant="secondary" size="sm" onClick={() => void load()}><RefreshCw className="mr-2 h-4 w-4" />Refresh</Button>
            <Button variant="outline" size="sm" onClick={() => void signOut()} className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"><LogOut className="mr-2 h-4 w-4" />Sign out</Button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm font-medium text-slate-500">Total enquiries</p><p className="mt-1 text-3xl font-bold text-slate-900">{total}</p></div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white shadow-sm"><p className="text-sm font-medium text-white/70">New enquiries</p><p className="mt-1 text-3xl font-bold">{newCount}</p></div>
        </div>

        <form onSubmit={(event) => { event.preventDefault(); setPage(1); setSearch(searchInput.trim()); }} className="mb-6 grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_180px_160px_auto]">
          <div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" /><Input value={searchInput} onChange={(event) => setSearchInput(event.target.value)} placeholder="Search name, email, phone or subject" className="pl-9" /></div>
          <select value={status} onChange={(event) => { setPage(1); setStatus(event.target.value); }} className="h-10 rounded-md border bg-white px-3 text-sm"><option value="">All statuses</option>{statuses.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select>
          <select value={sort} onChange={(event) => { setPage(1); setSort(event.target.value); }} className="h-10 rounded-md border bg-white px-3 text-sm"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select>
          <Button type="submit">Search</Button>
        </form>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
          {loading ? <div className="grid min-h-64 place-items-center"><Loader2 className="h-8 w-8 animate-spin text-blue-700" /></div> : items.length === 0 ? <div className="grid min-h-64 place-items-center p-8 text-center text-slate-500"><div><Mail className="mx-auto mb-3 h-10 w-10 text-slate-300" /><p className="font-semibold">No enquiries found</p><p className="text-sm">New contact messages will appear here.</p></div></div> : (
            <div className="overflow-x-auto"><table className="w-full min-w-[940px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase text-slate-500"><tr><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Phone</th><th className="px-4 py-3">Subject</th><th className="px-4 py-3">Submitted</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Actions</th></tr></thead><tbody className="divide-y">{items.map((item) => <tr key={item.id} className="hover:bg-slate-50"><td className="px-4 py-4"><p className="font-semibold text-slate-900">{item.name}</p><a href={`mailto:${item.email}`} className="text-xs text-blue-700 hover:underline">{item.email}</a></td><td className="px-4 py-4"><a href={`tel:${item.phone}`} className="hover:text-blue-700">{item.phone}</a></td><td className="max-w-64 truncate px-4 py-4">{item.subject}</td><td className="px-4 py-4 text-slate-500">{new Date(`${item.created_at}Z`).toLocaleString()}</td><td className="px-4 py-4"><select disabled={busyId === item.id} value={item.status} onChange={(event) => void changeStatus(item, event.target.value as EnquiryStatus)} className="rounded-full border px-3 py-1.5 text-xs font-semibold">{statuses.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></td><td className="px-4 py-4"><div className="flex justify-end gap-2"><Button asChild size="icon" variant="outline"><Link to="/admin/enquiries/$id" params={{ id: String(item.id) }} aria-label="View enquiry"><Eye className="h-4 w-4" /></Link></Button><Button size="icon" variant="outline" onClick={() => setDeleteTarget(item)} aria-label="Delete enquiry" className="text-red-600 hover:text-red-700"><Trash2 className="h-4 w-4" /></Button></div></td></tr>)}</tbody></table></div>
          )}
          {!loading && items.length > 0 ? <div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3 text-sm"><span className="text-slate-500">Page {page} of {totalPages}</span><div className="flex gap-2"><Button variant="outline" size="sm" disabled={page <= 1} onClick={() => setPage((value) => value - 1)}>Previous</Button><Button variant="outline" size="sm" disabled={page >= totalPages} onClick={() => setPage((value) => value + 1)}>Next</Button></div></div> : null}
        </div>
      </section>

      <AlertDialog open={Boolean(deleteTarget)} onOpenChange={(open) => !open && setDeleteTarget(null)}><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Delete this enquiry?</AlertDialogTitle><AlertDialogDescription>This permanently removes the enquiry from {deleteTarget?.name}. This cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => void confirmDelete()} className="bg-red-600 hover:bg-red-700">Delete enquiry</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>
    </main>
  );
}
