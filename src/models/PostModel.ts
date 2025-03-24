import { IComment } from "./CommentModel";

export interface IPost {
  id: string;
  caption: string;
  images: string[];
  comments: IComment;
}