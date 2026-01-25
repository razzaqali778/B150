const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export async function fetchStatus(path) {
  try {
    const response = await fetch(`${API_BASE}${path}`);
    if (!response.ok) {
      return { ok: false };
    }
    return response.json();
  } catch (error) {
    return { ok: false, message: error.message };
  }
}
