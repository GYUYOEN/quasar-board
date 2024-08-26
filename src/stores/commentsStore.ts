import { defineStore } from 'pinia';
import { getComments } from '../apicontroller/comments';
import { CommentDto } from '../assets/interfaces/index';

export const useCommentsStore = defineStore('comments', {
  state: () => ({
    postId: 0,
    comments: [] as CommentDto[],
    commentTotalCount: 0,
  }),
  getters: {
    getCommentCount: (state) => state.commentTotalCount,
  },
  actions: {
    async fetchComments() {
      try {
        const response = await getComments(this.postId);
        this.comments = response.commentDto;
        this.commentTotalCount = response.commentTotalCount;
      } catch (error) {
        console.log('댓글 목록 가져오기 실패: ', error);
        throw error;
      }
    },
    setPostId(id: number) {
      this.postId = id;
    },
  },
});
