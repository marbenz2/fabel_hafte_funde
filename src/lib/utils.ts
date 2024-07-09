import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchPayloadFromApi() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function fetchInstagramFromApi() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/instagram`);
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  const data = await response.json();
  return data;
}
