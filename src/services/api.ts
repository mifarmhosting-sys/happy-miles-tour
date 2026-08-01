interface ApiErrorBody {
  message?: string;
  errors?: Record<string, string>;
}

export class ApiError extends Error {
  status: number;
  fields?: Record<string, string>;

  constructor(message: string, status: number, fields?: Record<string, string>) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.fields = fields;
  }
}

let csrfToken = "";

export function setCsrfToken(token: string) {
  csrfToken = token;
}

export function getCsrfToken() {
  return csrfToken;
}

export async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (options.method && !["GET", "HEAD"].includes(options.method.toUpperCase()) && csrfToken) {
    headers.set("X-CSRF-Token", csrfToken);
  }

  const response = await fetch(url, { ...options, headers, credentials: "same-origin" });
  const contentType = response.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json")
    ? ((await response.json()) as ApiErrorBody & T)
    : null;
  if (!response.ok) {
    throw new ApiError(body?.message ?? "The server request failed.", response.status, body?.errors);
  }
  return body as T;
}
