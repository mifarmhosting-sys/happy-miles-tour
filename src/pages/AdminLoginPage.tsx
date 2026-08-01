import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminLogin, getAdminSession } from "@/services/auth";
import { useNavigate } from "@tanstack/react-router";
import { Loader2, LockKeyhole } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function checkSession() {
      try {
        const session = await getAdminSession();
        if (!cancelled && session.authenticated) {
          await navigate({ to: "/admin/enquiries", replace: true });
          return;
        }
      } catch {
        // The login form displays even if the initial session check fails.
      }
      if (!cancelled) setChecking(false);
    }
    void checkSession();
    return () => {
      cancelled = true;
    };
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await adminLogin(identity.trim(), password);
      await navigate({ to: "/admin/enquiries", replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen grid place-items-center bg-slate-950 text-white">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen grid place-items-center px-4 py-12 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-blue-600 text-white shadow-lg">
            <LockKeyhole className="h-7 w-7" />
          </div>
          <h1 className="font-display text-3xl font-bold text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-500">Happy Miles Tourism enquiry management</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="admin-identity">Email address or username</Label>
            <Input id="admin-identity" value={identity} onChange={(event) => setIdentity(event.target.value)} required autoComplete="username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <Input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required minLength={12} autoComplete="current-password" />
          </div>
          <Button type="submit" disabled={loading} className="w-full bg-blue-700 hover:bg-blue-800">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Sign in securely
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">Only approved administrator accounts are permitted.</p>
      </div>
    </main>
  );
}
