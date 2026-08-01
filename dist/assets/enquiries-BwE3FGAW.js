import { a as apiRequest, g as getCsrfToken } from "./api-wlwen1NL.js";
async function createEnquiry(input) {
  return apiRequest("/api/enquiries/create.php", {
    method: "POST",
    body: JSON.stringify(input)
  });
}
async function listEnquiries(params) {
  const query = new URLSearchParams({
    search: params.search,
    status: params.status,
    sort: params.sort,
    page: String(params.page),
    per_page: String(params.perPage ?? 20)
  });
  return apiRequest(`/api/enquiries/list.php?${query}`);
}
async function getEnquiry(id) {
  return apiRequest(`/api/enquiries/detail.php?id=${id}`);
}
async function updateEnquiry(id, changes) {
  return apiRequest("/api/enquiries/update.php", {
    method: "PATCH",
    body: JSON.stringify({ id, ...changes })
  });
}
async function deleteEnquiry(id) {
  return apiRequest("/api/enquiries/delete.php", {
    method: "DELETE",
    body: JSON.stringify({ id })
  });
}
async function exportEnquiries(filters) {
  const query = new URLSearchParams(filters);
  const response = await fetch(`/api/enquiries/export.php?${query}`, {
    credentials: "same-origin",
    headers: { "X-CSRF-Token": getCsrfToken() }
  });
  if (!response.ok) throw new Error("Unable to export enquiries.");
  return response.blob();
}
export {
  createEnquiry as c,
  deleteEnquiry as d,
  exportEnquiries as e,
  getEnquiry as g,
  listEnquiries as l,
  updateEnquiry as u
};
