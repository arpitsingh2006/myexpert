import { apiGet } from "./client";

export async function getPackages() {
  return await apiGet("/api/packages");
}

export async function getPackageBySlug(slug) {
  return await apiGet(`/api/packages/${slug}`);
}