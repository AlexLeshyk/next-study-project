export interface IComment {
  id: string;
  postId: string;
  parentCommentId?: string | null;
  comment: string;
}