import axios from 'axios';
import { PostsResponse } from '../assets/interfaces/index';

export const posts = async (
  page = 1,
  pageSize = 10,
  type = 'total'
): Promise<PostsResponse> => {
  try {
    const response = await axios.get<PostsResponse>(
      'http://localhost:5144/community/posts',
      {
        params: { page, pageSize, type },
      }
    );
    console.log('서버 통신 ok');
    return response.data;
  } catch (error) {
    console.error('서버 통신 오류', error);
    throw error;
  }
};
