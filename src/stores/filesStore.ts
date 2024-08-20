import { defineStore } from 'pinia';
import { getFiles } from '../apicontroller/files';
import { FilesResponse } from '../assets/interfaces/index';

export const useFilesStore = defineStore('files', {
  state: () => ({
    postId: 0,
    files: [] as FilesResponse[],
  }),
  getters: {},
  actions: {
    async fetchFiles() {
      try {
        const response = await getFiles(this.postId);
        this.files = Array.isArray(response) ? response : [response];
        console.log('Files fetched and stored:', this.files);
      } catch (error) {
        console.error('Error fetching files:', error);
      }
    },
  },
});
