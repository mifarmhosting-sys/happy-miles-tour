var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class ApiError extends Error {
  constructor(message, status, fields) {
    super(message);
    __publicField(this, "status");
    __publicField(this, "fields");
    this.name = "ApiError";
    this.status = status;
    this.fields = fields;
  }
}
let csrfToken = "";
function setCsrfToken(token) {
  csrfToken = token;
}
function getCsrfToken() {
  return csrfToken;
}
async function apiRequest(url, options = {}) {
  const headers = new Headers(options.headers);
  if (options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (options.method && !["GET", "HEAD"].includes(options.method.toUpperCase()) && csrfToken) {
    headers.set("X-CSRF-Token", csrfToken);
  }
  const response = await fetch(url, { ...options, headers, credentials: "same-origin" });
  const contentType = response.headers.get("content-type") ?? "";
  const body = contentType.includes("application/json") ? await response.json() : null;
  if (!response.ok) {
    throw new ApiError((body == null ? void 0 : body.message) ?? "The server request failed.", response.status, body == null ? void 0 : body.errors);
  }
  return body;
}
export {
  ApiError as A,
  apiRequest as a,
  getCsrfToken as g,
  setCsrfToken as s
};
