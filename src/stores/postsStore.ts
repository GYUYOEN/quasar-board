import { defineStore } from 'pinia';
import { getPosts } from '../apicontroller/posts';
import { PostDto } from '../assets/interfaces/index';
import { menuList } from '../assets/column';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    currentPage: 1,
    rowsPerPage: 20,
    totalPages: 0,
    posts: [] as PostDto[],
    currentRoute: '',
    selectedPost: {} as PostDto,
  }),
  getters: {
    tableTitle: (state) => {
      const menuItem = menuList.find(
        (item) => item.route === state.currentRoute
      );
      return menuItem ? menuItem.label : '';
    },
  },
  actions: {
    async fetchPosts() {
      try {
        const response = await getPosts(
          this.currentPage,
          this.rowsPerPage,
          this.currentRoute || '/posts'
        );
        this.posts = response.items.map((post) => ({
          ...post,
          post_datetime: new Date(post.post_datetime).toLocaleDateString(),
        }));
        this.totalPages = response.totalPages;
      } catch (error) {
        console.log('게시물 목록 가져오기 실패: ', error);
      }
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
      this.fetchPosts();
    },
    setCurrentRoute(route: string) {
      this.currentRoute = route;
      this.currentPage = 1;
      this.fetchPosts();
    },
    setSelectedPost(post: PostDto) {
      this.selectedPost = post;
    },
  },
});
