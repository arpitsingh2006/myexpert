import { apiGet } from "./client";

export async function getPackages() {
  return await apiGet("/api/packages");
}