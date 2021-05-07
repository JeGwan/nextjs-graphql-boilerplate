import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { API_END_POINT } from "./constants";
interface ApiSuccessResponse<Result = any> {
  message: "SUCCESS";
  result: 1;
  timestamp: string;
  data: Result;
}
interface ApiFailedResponse {
  message: "FAIL";
  result: 0;
  timestamp: string;
  error: any;
}

export type ApiResponse<Result = any> =
  | ApiSuccessResponse<Result>
  | ApiFailedResponse;

let api: Api | undefined = undefined;

class Api {
  private axios: AxiosInstance;
  constructor(ctx?: any) {
    const config: AxiosRequestConfig = {
      baseURL: API_END_POINT,
      headers: { "Content-Type": "application/json" },
    };
    this.axios = Axios.create(config);
  }
  post<Result>(route: string, body?: any) {
    return this.axios.post<ApiResponse<Result>>(route, body);
  }
  get<Result>(route: string, params?: any) {
    return this.axios.get<ApiResponse<Result>>(route, { params });
  }
}
export const renewApi = (ctx?: any) => (api = new Api(ctx));
export const getApi = (ctx?: any) => api || (api = new Api(ctx));
