import { apiGet } from "./client";

export async function getSettings() {
  return await apiGet("/api/settings");
}