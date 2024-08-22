export interface PostDto {
  post_id: number;
  post_num: number;
  post_reply: string;
  brd_id: number;
  post_title: string;
  post_content: string;
  post_category: string;
  mem_id: number;
  post_userid: string;
  post_username: string;
  post_nickname: string;
  post_email: string;
  post_homepage: string | null;
  post_datetime: string;
  post_password: string;
  post_updated_datetime: string;
  post_update_mem_id: number;
  post_comment_count: number;
  post_comment_updated_datetime: string | null;
  post_link_count: number;
  post_secret: number;
  post_html: number;
  post_hide_comment: number;
  post_notice: number;
  post_receive_email: number;
  post_hit: number;
  post_like: number;
  post_dislike: number;
  post_ip: string;
  post_blame: number;
  post_file: number;
  post_image: number;
  post_del: number;
  post_uuid: string;
  notice_start_date: string | null;
  notice_end_date: string | null;
  mem_address1: string;
  mem_address2: string;
  mem_address3: string;
  mem_address4: string;
}

export interface PostData {
  postId: number;
  postTitle: string;
  writer: string;
  department: string;
  postDatetime: string;
  postHit: number;
}

export interface PostsResponse {
  items: PostDto[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface PostIdDto {
  title: string;
  profileImage: string;
  name: string;
  position: string;
  department: string;
  postDate: string;
  content: string;
}

export interface FileDataDto {
  file_id: number;
  original_name: string;
  file_reference: string;
  fileKB: number;
}

export interface FilesResponse {
  fileDataDto: FileDataDto[];
  fileTotalCount: number;
}

export interface CommentDto {
  cmt_id: number;
  cmt_reply: string;
  cmt_content: string | null;
  cmt_username: string;
  cmt_datetime: string | null;
  cmt_like: number;
  mem_address1: string | null;
  mem_address3: string | null;
}

export interface CommentResponse {
  commentDto: CommentDto[];
  commentTotalCount: number;
}
