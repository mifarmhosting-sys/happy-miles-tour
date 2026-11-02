import { d as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-DtOlqKV1.js";
import { T as Trash2, A as AlertDialog, a as AlertDialogContent, b as AlertDialogHeader, c as AlertDialogTitle, d as AlertDialogDescription, e as AlertDialogFooter, f as AlertDialogCancel, g as AlertDialogAction } from "./alert-dialog-BxsI00lI.js";
import { B as Button } from "./button-D1bVIiWG.js";
import { I as Input } from "./input-uMMBhSju.js";
import { g as getAdminSession, b as adminLogout } from "./auth-DniPm26z.js";
import { l as listEnquiries, u as updateEnquiry, d as deleteEnquiry, e as exportEnquiries } from "./enquiries-BwE3FGAW.js";
import { c as createLucideIcon, u as ue } from "./index-4lEAEGrf.js";
import { L as LoaderCircle } from "./loader-circle-DbcjrMk3.js";
import { M as Mail } from "./mail-DZ3nonx1.js";
import { E as Eye } from "./eye-CfPpHXYz.js";
import "./Combination-DqdxzB_v.js";
import "./api-wlwen1NL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const statuses = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "in_progress", label: "In progress" },
  { value: "closed", label: "Closed" },
  { value: "spam", label: "Spam" }
];
function AdminEnquiriesPage() {
  const navigate = useNavigate();
  const [items, setItems] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [searchInput, setSearchInput] = reactExports.useState("");
  const [search, setSearch] = reactExports.useState("");
  const [status, setStatus] = reactExports.useState("");
  const [sort, setSort] = reactExports.useState("newest");
  const [page, setPage] = reactExports.useState(1);
  const [totalPages, setTotalPages] = reactExports.useState(1);
  const [total, setTotal] = reactExports.useState(0);
  const [newCount, setNewCount] = reactExports.useState(0);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [busyId, setBusyId] = reactExports.useState(null);
  const load = reactExports.useCallback(async () => {
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
        ue.error(error instanceof Error ? error.message : "Unable to load enquiries.");
      }
    } finally {
      setLoading(false);
    }
  }, [navigate, page, search, sort, status]);
  reactExports.useEffect(() => {
    void load();
  }, [load]);
  async function changeStatus(item, next) {
    setBusyId(item.id);
    try {
      await updateEnquiry(item.id, { status: next });
      setItems((current) => current.map((row) => row.id === item.id ? { ...row, status: next } : row));
      ue.success("Status updated.");
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to update status.");
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
      ue.success("Enquiry deleted.");
      await load();
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to delete enquiry.");
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
      anchor.download = `enquiries-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
      anchor.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to export enquiries.");
    }
  }
  async function signOut() {
    try {
      await adminLogout();
    } finally {
      await navigate({ to: "/admin/login", replace: true });
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-slate-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-950 text-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold", children: "Enquiry Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/60", children: "Happy Miles Tourism" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: () => void downloadCsv(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-2 h-4 w-4" }),
          "Export CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "secondary", size: "sm", onClick: () => void load(), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => void signOut(), className: "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "mr-2 h-4 w-4" }),
          "Sign out"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 py-8 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-slate-500", children: "Total enquiries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-bold text-slate-900", children: total })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-white/70", children: "New enquiries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-3xl font-bold", children: newCount })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (event) => {
        event.preventDefault();
        setPage(1);
        setSearch(searchInput.trim());
      }, className: "mb-6 grid gap-3 rounded-2xl bg-white p-4 shadow-sm md:grid-cols-[1fr_180px_160px_auto]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-slate-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: searchInput, onChange: (event) => setSearchInput(event.target.value), placeholder: "Search name, email, phone or subject", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: status, onChange: (event) => {
          setPage(1);
          setStatus(event.target.value);
        }, className: "h-10 rounded-md border bg-white px-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "All statuses" }),
          statuses.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: item.value, children: item.label }, item.value))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: sort, onChange: (event) => {
          setPage(1);
          setSort(event.target.value);
        }, className: "h-10 rounded-md border bg-white px-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest first" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "oldest", children: "Oldest first" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Search" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl bg-white shadow-sm", children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-64 place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin text-blue-700" }) }) : items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid min-h-64 place-items-center p-8 text-center text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mx-auto mb-3 h-10 w-10 text-slate-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "No enquiries found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "New contact messages will appear here." })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[940px] text-left text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-slate-50 text-xs uppercase text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Customer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Submitted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-4 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-slate-900", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${item.email}`, className: "text-xs text-blue-700 hover:underline", children: item.email })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${item.phone}`, className: "hover:text-blue-700", children: item.phone }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "max-w-64 truncate px-4 py-4", children: item.subject }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4 text-slate-500", children: (/* @__PURE__ */ new Date(`${item.created_at}Z`)).toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("select", { disabled: busyId === item.id, value: item.status, onChange: (event) => void changeStatus(item, event.target.value), className: "rounded-full border px-3 py-1.5 text-xs font-semibold", children: statuses.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: option.value, children: option.label }, option.value)) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "icon", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/enquiries/$id", params: { id: String(item.id) }, "aria-label": "View enquiry", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", onClick: () => setDeleteTarget(item), "aria-label": "Delete enquiry", className: "text-red-600 hover:text-red-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
            ] }) })
          ] }, item.id)) })
        ] }) }),
        !loading && items.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 border-t px-4 py-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-slate-500", children: [
            "Page ",
            page,
            " of ",
            totalPages
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", disabled: page <= 1, onClick: () => setPage((value) => value - 1), children: "Previous" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", disabled: page >= totalPages, onClick: () => setPage((value) => value + 1), children: "Next" })
          ] })
        ] }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: Boolean(deleteTarget), onOpenChange: (open) => !open && setDeleteTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Delete this enquiry?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "This permanently removes the enquiry from ",
          deleteTarget == null ? void 0 : deleteTarget.name,
          ". This cannot be undone."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogAction, { onClick: () => void confirmDelete(), className: "bg-red-600 hover:bg-red-700", children: "Delete enquiry" })
      ] })
    ] }) })
  ] });
}
export {
  AdminEnquiriesPage as default
};
