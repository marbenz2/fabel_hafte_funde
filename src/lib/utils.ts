import { API_URL } from "../config";

export async function fetchArtikelFromApi() {
  const response = await fetch(`${API_URL}/items`);
  console.log(`${API_URL}/items`);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  console.log("Data: ", data);
  return data;
}
