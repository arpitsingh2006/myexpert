import { apiGet } from "./client";


export async function getBlogs() {
  return await apiGet("/api/blogs");
}


export async function getBlogDetail(slug) {
  return await apiGet(`/api/blogs/${slug}`);
}