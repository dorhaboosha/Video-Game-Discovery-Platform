/**
 * API client service.
 *
 * Generic Axios-based client for the backend /api (RAWG proxy). Exposes
 * {@link FetchResponse} for paginated list responses and {@link APIClient}
 * with getAll (list + query params) and get (single by id/slug).
 */

import axios, { AxiosRequestConfig } from "axios";

/** Paginated list shape from the API: count, next URL, results array. */
export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "/api",
});

/**
 * Generic API client for an endpoint; getAll for lists, get for single resource.
 */
class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /** GET list at endpoint; optional config for params (e.g. page, genres). Returns response data. */
  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  /** GET single resource at endpoint/:id. Returns response data. */
  get = (id: number | string) => {
    return axiosInstance.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  };
}

export default APIClient;
