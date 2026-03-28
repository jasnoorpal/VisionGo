import API from "./api";

export const getProgress = async (careerId) => {
    try {
        const res = await API.get(`/progress/${careerId}`);
        return res.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Failed to fetch progress");
    }
};

export const saveProgress = async (data, token) => {
    const res = await fetch(`${BASE_URL}/progress`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });

    if (!res.ok) throw new Error("Failed to save progress");

    return res.json();
};