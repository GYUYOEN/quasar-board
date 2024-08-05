import axios from 'axios';

interface PostsResponse {
  postId: number;
  postTitle: string;
  writer: string;
  department: string;
  postDatetime: Date;
  views: number;
}

export const posts = async (): Promise<PostsResponse[]> => {
  try {
    const response = await axios.post<PostsResponse[]>(
      'http://localhost:5144/community/posts'
    );
    console.log('서버 통신 ok');
    return response.data;
  } catch (error) {
    console.error('서버 통신 오류', error);
    throw error;
  }
};
