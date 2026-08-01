import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(scriptDirectory, "..");
const apiSource = resolve(root, "api");
const apiDestination = resolve(root, "dist", "api");

await mkdir(apiDestination, { recursive: true });
await cp(apiSource, apiDestination, { recursive: true, force: true });

console.log("Copied the PHP API into dist/api for Hostinger deployment.");
