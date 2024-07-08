import { API_URL } from "../config";

export async function fetchArtikelFromApi() {
  console.log("fetchArtikelFromApi");
  const response = await fetch(`${API_URL}/posts`);
  console.log("Response: ", response);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  console.log("Data: ", data);
  return data;
}
