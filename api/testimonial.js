import { apiGet } from "./client";

export async function getTestimonials() {
  return await apiGet("/api/testimonials");
}