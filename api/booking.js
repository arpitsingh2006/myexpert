import { apiPost } from "./client";


export async function createBooking(data) {
    return await apiPost("/api/bookings", data);
}