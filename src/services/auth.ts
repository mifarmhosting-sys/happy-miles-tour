import { apiRequest, setCsrfToken } from "@/services/api";
import type { AdminUser } from "@/types/enquiry";

interface SessionResponse {
  success: true;
  authenticated: boolean;
  admin: AdminUser | null;
  csrfToken: string;
}

export async function getAdminSession() {
  const response = await apiRequest<SessionResponse>("/api/auth/session.php");
  setCsrfToken(response.csrfToken);
  return response;
}

export async function adminLogin(identity: string, password: string) {
  if (!identity || !password) throw new Error("Enter your email/username and password.");
  await getAdminSession();
  const response = await apiRequest<{ success: true; admin: AdminUser; csrfToken: string }>(
    "/api/auth/login.php",
    { method: "POST", body: JSON.stringify({ identity, password }) },
  );
  setCsrfToken(response.csrfToken);
  return response.admin;
}

export async function adminLogout() {
  await apiRequest<{ success: true }>("/api/auth/logout.php", { method: "POST" });
  setCsrfToken("");
}
