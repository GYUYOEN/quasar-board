import axios from 'axios';
import { CommentResponse } from '../assets/interfaces/index';

export const getComments = async (postId: number): Promise<CommentResponse> => {
  try {
    const response = await axios.get<CommentResponse>(
      `http://localhost:5144/comment?postId=${postId}`,
      {
        params: { postId },
      }
    );
    console.log('comments 통신 성공: ', response.data);
    return response.data;
  } catch (error) {
    console.error('comments 통신 오류', error);
    throw error;
  }
};
