import { apiGet } from "./client";

export async function getPackageCategories() {
  return await apiGet("/api/package-categories");
}
export async function getPackagesByCategory(slug) {
  return await apiGet(`/api/packages/category/${slug}`);
}