<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :title="store.tableTitle"
      :rows="store.posts"
      :columns="postColumn"
      :rows-per-page-options="[store.rowsPerPage]"
      row-key="postId"
      hide-bottom
      @row-click="onRowClick"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePostsStore } from '../stores/postsStore';
import { postColumn } from '../assets/column/index';
import { getPostDetail } from 'src/apicontroller/postDetail';
import { useRouter } from 'vue-router';
import { PostData } from '../assets/interfaces/index';

const props = defineProps<{
  routeInfo: string;
}>();

const router = useRouter();
const store = usePostsStore();

const onRowClick = async (evt: Event, row: PostData) => {
  try {
    const postDetail = await getPostDetail(row.postId);
    store.setSelectedPost(postDetail);
    router.push({ name: 'PostDetail', params: { postId: row.postId } });
  } catch (error) {
    console.error('Failed to fetch post detail:', error);
  }
};

watch(
  () => props.routeInfo,
  (newRoute) => {
    store.setCurrentRoute(newRoute);
  }
);

onMounted(() => {
  store.setCurrentRoute(props.routeInfo);
});
</script>
