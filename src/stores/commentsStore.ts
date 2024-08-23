import { defineStore } from 'pinia';
import { getComments } from '../apicontroller/comments';
import { CommentDto } from '../assets/interfaces/index';

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    postId: 0,
    comments: [] as CommentDto[],
    commentTotalCount: 0,
  }),
  getters: {},
  actions: {
    async fetchComments() {
      try {
        const resposne = await getComments(this.postId);
        this.comments = resposne.commentDto;
        this.commentTotalCount = resposne.commentTotalCount;
      } catch (error) {
        console.log('댓글 목록 가져오기 실패: ', error);
      }
    },
  },
});
