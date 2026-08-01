export type EnquiryStatus =
  | "new"
  | "contacted"
  | "in_progress"
  | "closed"
  | "spam";

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: EnquiryStatus;
  admin_notes: string | null;
  source: string;
  created_at: string;
  updated_at: string;
}

export type EnquirySummary = Omit<Enquiry, "message" | "admin_notes">;

export interface CreateEnquiryInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website?: string;
}

export interface AdminUser {
  id: number;
  username: string;
  email: string;
}

export interface EnquiryListResponse {
  data: EnquirySummary[];
  pagination: { page: number; perPage: number; total: number; totalPages: number };
  counts: { total: number; new: number };
}
