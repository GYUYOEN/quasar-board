import axios from 'axios';
import { PostDto } from '../assets/interfaces/index';

export const getPostDetail = async (postId: number): Promise<PostDto> => {
  try {
    const response = await axios.get<PostDto>(
      `http://localhost:5144/community/posts?postId=${postId}`,
      {
        params: { postId },
      }
    );
    console.log('PostId 통신 ok : ', response.data);
    return response.data;
  } catch (error) {
    console.error('PostId 통신 오류', error);
    throw error;
  }
};
