/**
 * RAWG API HTTP client.
 *
 * Preconfigured Axios instance for the RAWG API (api.rawg.io) with base URL,
 * timeout, and an interceptor that adds the API key to every request.
 */

import axios from "axios";

const RAWG_BASE_URL = "https://api.rawg.io/api";

/**
 * Reads the RAWG API key from environment variables.
 *
 * @returns The value of RAWG_API_KEY
 * @throws {Error} When RAWG_API_KEY is missing or empty
 */
function getApiKey(): string {
  const key = process.env.RAWG_API_KEY;
  if (!key) {
    throw new Error("Missing RAWG_API_KEY in environment variables.");
  }
  return key;
}

/**
 * Axios instance for RAWG API requests.
 *
 * - baseURL: https://api.rawg.io/api
 * - timeout: 15 seconds
 * - Every request automatically includes the API key as a query param (`key`).
 */
export const rawgClient = axios.create({
  baseURL: RAWG_BASE_URL,
  timeout: 15_000,
});

/** Attach the API key to every request as a query param. */
rawgClient.interceptors.request.use((config) => {
  config.params = {
    ...(config.params || {}),
    key: getApiKey(),
  };
  return config;
});
