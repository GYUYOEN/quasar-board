<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :title="store.tableTitle"
      :rows="store.posts"
      :columns="column"
      :rows-per-page-options="[store.rowsPerPage]"
      row-key="postId"
      hide-bottom
      @row-click="onRowClick"
    >
      <template v-slot:body-cell-post_id="props">
        <q-td :props="props">
          {{ isTopPost(props.row) ? 'Top' : props.row.post_id }}
        </q-td>
      </template>
      <template v-slot:body-cell-post_title="props">
        <q-td :props="props">
          <div class="row items-center">
            {{ props.row.post_title }}
            <PostIcons
              :post-date-time="props.row.post_datetime"
              :post-id="props.row.post_id"
            />
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { usePostsStore } from '../../../stores/postsStore';
import { postColumn } from '../../../assets/column/index';
import { getPostDetail } from 'src/apicontroller/postDetail';
import { useRouter } from 'vue-router';
import { PostDto } from 'src/assets/interfaces';
import PostIcons from './PostIcons.vue';

const props = defineProps<{
  routeInfo: string;
}>();

const router = useRouter();
const store = usePostsStore();

const column = computed(() => postColumn);

const isTopPost = (row: PostDto): boolean => {
  if (!row.notice_end_date) return false;
  const now = new Date();
  const endDate = new Date(row.notice_end_date);
  return row.post_notice === 1 && endDate > now;
};

const onRowClick = async (evt: Event, row: PostDto): Promise<void> => {
  try {
    const postDetail = await getPostDetail(row.post_id);
    store.setSelectedPost(postDetail);
    router.push({ name: 'PostDetail', params: { postId: row.post_id } });
  } catch (error) {
    console.error('Failed to fetch post detail:', error);
  }
};

computed(() => {
  store.setCurrentRoute(props.routeInfo);
  return props.routeInfo;
});
</script>
