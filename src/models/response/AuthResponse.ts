import { IUser } from "../UserModel";

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}