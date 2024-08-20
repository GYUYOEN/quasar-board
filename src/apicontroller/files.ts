import axios from 'axios';
import { FilesResponse } from '../assets/interfaces/index';

export const getFiles = async (postId: number): Promise<FilesResponse> => {
  try {
    const response = await axios.get<FilesResponse>(
      `
      http://localhost:5144/file`,
      {
        params: { postId },
      }
    );
    console.log('Files 통신 ok : ', response.data);
    return response.data;
  } catch (error) {
    console.error('Files 통신 오류', error);
    throw error;
  }
};
