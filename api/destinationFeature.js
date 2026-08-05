import { apiGet } from "./client";

export async function getDestinationFeatures() {
  return await apiGet("/api/destination-features");
}