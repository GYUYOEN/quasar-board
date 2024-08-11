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
  brdId: number;
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
