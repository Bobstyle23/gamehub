import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

export interface FetchSingleDataResponse<T> {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  }

  get(requestConfig?: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchSingleDataResponse<T>>(this.endpoint, requestConfig)
      .then((res) => res.data);
  }
}

export default APIClient;
