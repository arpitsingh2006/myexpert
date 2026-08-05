import { apiGet, apiPost } from "./client";


// Get Vehicle Types
export async function getVehicleTypes() {

    try {

        const response = await apiGet("/api/vehicle-types");

        return response;

    } catch (error) {

        console.log("Vehicle Type API Error:", error);

        throw error;

    }

}


// Create Cab Booking
export async function createCabBooking(data) {

    try {

        const response = await apiPost(
            "/api/bookings",
            data
        );


        return response;


    } catch (error) {


        console.log(
            "Cab Booking API Error:",
            error
        );


        // Laravel validation error (422) → normalize into { message, errors }
        if (error.response) {

            const status = error.response.status;
            const data = error.response.data || {};

            const normalizedError = new Error(
                data.message || "Something went wrong. Please try again."
            );

            if (status === 422) {

                normalizedError.errors = data.errors || {};
            }

            throw normalizedError;

        }


        // Network error / no response from server
        if (error.request) {

            throw new Error("Server not responding. Please try again.");
        }


        throw new Error(error.message || "Booking failed. Please try again.");


    }

}