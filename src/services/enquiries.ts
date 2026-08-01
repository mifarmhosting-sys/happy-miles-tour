import { apiRequest, getCsrfToken } from "@/services/api";
import type {
  CreateEnquiryInput,
  Enquiry,
  EnquiryListResponse,
  EnquiryStatus,
} from "@/types/enquiry";

export async function createEnquiry(input: CreateEnquiryInput) {
  return apiRequest<{ success: true; message: string }>("/api/enquiries/create.php", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function listEnquiries(params: {
  search: string;
  status: string;
  sort: string;
  page: number;
  perPage?: number;
}) {
  const query = new URLSearchParams({
    search: params.search,
    status: params.status,
    sort: params.sort,
    page: String(params.page),
    per_page: String(params.perPage ?? 20),
  });
  return apiRequest<EnquiryListResponse>(`/api/enquiries/list.php?${query}`);
}

export async function getEnquiry(id: number) {
  return apiRequest<{ success: true; data: Enquiry }>(`/api/enquiries/detail.php?id=${id}`);
}

export async function updateEnquiry(
  id: number,
  changes: { status?: EnquiryStatus; admin_notes?: string },
) {
  return apiRequest<{ success: true; message: string }>("/api/enquiries/update.php", {
    method: "PATCH",
    body: JSON.stringify({ id, ...changes }),
  });
}

export async function deleteEnquiry(id: number) {
  return apiRequest<{ success: true; message: string }>("/api/enquiries/delete.php", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
}

export async function exportEnquiries(filters: { search: string; status: string; sort: string }) {
  const query = new URLSearchParams(filters);
  const response = await fetch(`/api/enquiries/export.php?${query}`, {
    credentials: "same-origin",
    headers: { "X-CSRF-Token": getCsrfToken() },
  });
  if (!response.ok) throw new Error("Unable to export enquiries.");
  return response.blob();
}
