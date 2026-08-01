import { a as apiRequest, s as setCsrfToken } from "./api-wlwen1NL.js";
async function getAdminSession() {
  const response = await apiRequest("/api/auth/session.php");
  setCsrfToken(response.csrfToken);
  return response;
}
async function adminLogin(identity, password) {
  if (!identity || !password) throw new Error("Enter your email/username and password.");
  await getAdminSession();
  const response = await apiRequest(
    "/api/auth/login.php",
    { method: "POST", body: JSON.stringify({ identity, password }) }
  );
  setCsrfToken(response.csrfToken);
  return response.admin;
}
async function adminLogout() {
  await apiRequest("/api/auth/logout.php", { method: "POST" });
  setCsrfToken("");
}
export {
  adminLogin as a,
  adminLogout as b,
  getAdminSession as g
};
