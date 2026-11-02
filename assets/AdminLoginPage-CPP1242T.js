import { d as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-DtOlqKV1.js";
import { B as Button } from "./button-D1bVIiWG.js";
import { I as Input } from "./input-uMMBhSju.js";
import { L as Label } from "./label-Hv_G_6_d.js";
import { g as getAdminSession, a as adminLogin } from "./auth-DniPm26z.js";
import { c as createLucideIcon, u as ue } from "./index-4lEAEGrf.js";
import { L as LoaderCircle } from "./loader-circle-DbcjrMk3.js";
import "./api-wlwen1NL.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
];
const LockKeyhole = createLucideIcon("lock-keyhole", __iconNode);
function AdminLoginPage() {
  const navigate = useNavigate();
  const [identity, setIdentity] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [checking, setChecking] = reactExports.useState(true);
  reactExports.useEffect(() => {
    let cancelled = false;
    async function checkSession() {
      try {
        const session = await getAdminSession();
        if (!cancelled && session.authenticated) {
          await navigate({ to: "/admin/enquiries", replace: true });
          return;
        }
      } catch {
      }
      if (!cancelled) setChecking(false);
    }
    void checkSession();
    return () => {
      cancelled = true;
    };
  }, [navigate]);
  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await adminLogin(identity.trim(), password);
      await navigate({ to: "/admin/enquiries", replace: true });
    } catch (error) {
      ue.error(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }
  if (checking) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen grid place-items-center bg-slate-950 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-8 w-8 animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "min-h-screen grid place-items-center px-4 py-12 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-blue-600 text-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockKeyhole, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-slate-900", children: "Admin Login" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-slate-500", children: "Happy Miles Tourism enquiry management" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-identity", children: "Email address or username" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-identity", value: identity, onChange: (event) => setIdentity(event.target.value), required: true, autoComplete: "username" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-password", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-password", type: "password", value: password, onChange: (event) => setPassword(event.target.value), required: true, minLength: 12, autoComplete: "current-password" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", disabled: loading, className: "w-full bg-blue-700 hover:bg-blue-800", children: [
        loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
        "Sign in securely"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-xs text-slate-400", children: "Only approved administrator accounts are permitted." })
  ] }) });
}
export {
  AdminLoginPage as default
};
