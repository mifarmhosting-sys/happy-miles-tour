import { u as useParams, d as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-BfVoKVUJ.js";
import { T as Trash2, A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-DyWTNCcx.js";
import { B as Button } from "./button-7lTdaMCp.js";
import { T as Textarea } from "./textarea-DzlP0LLu.js";
import { g as getAdminSession } from "./auth-DniPm26z.js";
import { g as getEnquiry, u as updateEnquiry, d as deleteEnquiry } from "./enquiries-BwE3FGAW.js";
import { c as createLucideIcon, u as ue } from "./index-D922Vg3x.js";
import { L as LoaderCircle } from "./loader-circle-B5MMSZ_w.js";
import { A as ArrowLeft } from "./arrow-left-BtgS5pgT.js";
import { M as Mail } from "./mail-C8ZKijEJ.js";
import { P as Phone } from "./phone-CV5-w8ET.js";
import "./Combination-CEzEhUYw.js";
import "./api-wlwen1NL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
const statuses = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In progress" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" }
];
function AdminEnquiryDetailPage() {
  const { id } = useParams({ from: "/admin/enquiries/$id" });
  const navigate = useNavigate();
  const numericId = Number(id);
  const [enquiry, setEnquiry] = reactExports.useState(null);
  const [status, setStatus] = reactExports.useState("new");
  const [notes, setNotes] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(true);
  const [saving, setSaving] = reactExports.useState(false);
  const [confirmDelete, setConfirmDelete] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
        ue.error(error instanceof Error ? error.message : "Unable to load enquiry.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void load();
    return () => {
      cancelled = true;
    };
  }, [navigate, numericId]);
  async function saveChanges() {
    if (!enquiry || saving) return;
    setSaving(true);
    try {
      await updateEnquiry(enquiry.id, { status, admin_notes: notes.trim() });
      setEnquiry({ ...enquiry, status, admin_notes: notes.trim() || null });
      ue.success("Enquiry updated.");
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  }
  async function remove() {
    if (!enquiry) return;
    setSaving(true);
    try {
      await deleteEnquiry(enquiry.id);
      ue.success("Enquiry deleted.");
      await navigate({ to: "/admin/enquiries", replace: true });
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to delete enquiry.");
      setSaving(false);
    }
  }
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-blue-700" }) });
  if (!enquiry) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold", children: "Enquiry unavailable" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/enquiries", children: "Return to enquiries" }) })
  ] }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-6 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "mb-3 text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/enquiries", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Back to enquiries"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-bold", children: [
        "Enquiry #",
        enquiry.id
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-white/60", children: [
        "Received ",
        (/* @__PURE__ */ new Date(`${enquiry.created_at}Z`)).toLocaleString()
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_320px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 text-xl font-bold text-slate-900", children: "Customer details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-slate-400", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium", children: enquiry.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase text-slate-400", children: "Subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-medium", children: enquiry.subject })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${enquiry.email}`, className: "flex items-center gap-2 text-blue-700 hover:underline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
              enquiry.email
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${enquiry.phone}`, className: "flex items-center gap-2 text-blue-700 hover:underline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
              enquiry.phone
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold text-slate-900", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-pre-wrap leading-7 text-slate-700", children: enquiry.message })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "detail-status", className: "text-sm font-semibold", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("select", { id: "detail-status", value: status, onChange: (event) => setStatus(event.target.value), className: "mt-2 h-10 w-full rounded-md border bg-white px-3 text-sm", children: statuses.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.value, children: item.label }, item.value)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "admin-notes", className: "mt-5 block text-sm font-semibold", children: "Private admin notes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "admin-notes", value: notes, onChange: (event) => setNotes(event.target.value), rows: 9, maxLength: 1e4, placeholder: "Add follow-up details visible only to administrators...", className: "mt-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => void saveChanges(), disabled: saving, className: "mt-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "mr-2 h-4 w-4" }),
            "Save changes"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-red-200 bg-red-50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-red-900", children: "Danger zone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-700", children: "Deleting an enquiry cannot be undone." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "destructive", className: "mt-4 w-full", onClick: () => setConfirmDelete(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "mr-2 h-4 w-4" }),
            "Delete enquiry"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: confirmDelete, onOpenChange: setConfirmDelete, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogTitle, { children: [
          "Delete enquiry #",
          enquiry.id,
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "This permanently deletes the message from ",
          enquiry.name,
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => void remove(), className: "bg-red-600 hover:bg-red-700", children: "Delete permanently" })
      ] })
    ] }) })
  ] });
}
export {
  AdminEnquiryDetailPage as default
};
