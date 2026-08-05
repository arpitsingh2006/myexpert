import { apiGet } from "./client";

export async function getBanners() {
  return await apiGet("/api/banners");
}