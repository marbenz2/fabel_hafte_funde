import { API_URL } from "../config";

export async function fetchArtikelFromApi() {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}
