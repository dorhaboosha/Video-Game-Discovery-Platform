import axios from "axios";

const RAWG_BASE_URL = "https://api.rawg.io/api";

function getApiKey(): string {
  const key = process.env.RAWG_API_KEY;
  if (!key) {
    throw new Error("Missing RAWG_API_KEY in environment variables.");
  }
  return key;
}

export const rawgClient = axios.create({
  baseURL: RAWG_BASE_URL,
  timeout: 15_000,
});

// Attach the key automatically to every request
rawgClient.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),
    key: getApiKey(),
  };
  return config;
});
