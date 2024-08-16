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

const props = defineProps<{
  routeInfo: string;
}>();

const router = useRouter();
const store = usePostsStore();

watch(
  () => props.routeInfo,
  (newRoute) => {
    store.setCurrentRoute(newRoute);
  }
);

const onRowClick = async (evt: Event, row: { postId: number }) => {
  try {
    const postData = await getPostDetail(row.postId);
    router.push({
      name: 'PostDetail',
      params: { postId: row.postId },
      state: { postData },
    });
  } catch (error) {
    console.error('Error fetching post details:', error);
  }
};

onMounted(() => {
  store.setCurrentRoute(props.routeInfo);
});
</script>
