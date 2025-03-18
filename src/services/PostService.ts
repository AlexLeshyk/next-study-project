import axiosApi from "@/http/api";
import { AxiosResponse } from "axios";
import { IPost } from "@/models/PostModel";

export default class PostService {
  static async fetchUsers(): Promise<AxiosResponse<IPost[]>> {
    return axiosApi.get<IPost[]>("/posts");
  }
}
