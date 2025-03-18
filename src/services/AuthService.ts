import apiAxios from "@/http/api";
import { AuthResponse } from "@/models/response/AuthResponse";
import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>("/signin", { email, password });
  }

  static async registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return apiAxios.post<AuthResponse>("/registration", { email, password });
  }

  static async logout() {
    return apiAxios.post("/logout");
  }
}
