import { apiGet } from "./client";


export async function getCabs() {

    return await apiGet("/api/cabs");

}