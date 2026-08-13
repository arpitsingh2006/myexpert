// const API_URL = (
//     process.env.NEXT_PUBLIC_API_URL ||
//     "https://expert.vikashproduction.com"
// ).replace(/\/$/, "");

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://expert.vikashproduction.com/"
).replace(/\/$/, "");

// GET API
export async function apiGet(endpoint) {

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw data;
    }

    return data;
}


// POST API
export async function apiPost(endpoint, body) {

    const response = await fetch(
        `${API_URL}${endpoint}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        }
    );


    const data = await response.json();


    if (!response.ok) {
        throw data;
    }


    return data;
}