import { defineStore } from 'pinia';
import { getFiles } from '../apicontroller/files';
import { fileDataDto } from '../assets/interfaces/index';

export const useFilesStore = defineStore('files', {
  state: () => ({
    postId: 0,
    files: [] as fileDataDto[],
    fileTotalCount: 0,
  }),
  getters: {},
  actions: {
    async fetchFiles() {
      try {
        const response = await getFiles(this.postId);
        this.files = response.fileDataDto;
        this.fileTotalCount = response.fileTotalCount;
        console.log('Files fetched and stored:', this.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    },
  },
});
