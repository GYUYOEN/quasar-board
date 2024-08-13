<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      title="게시물 목록"
      :rows="rows"
      :columns="postColumn"
      :rows-per-page-options="[pagination.rowsPerPage]"
      row-key="brdId"
      hide-bottom
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { posts } from '../apicontroller/posts';
import { PostDto, PostData } from '../assets/interfaces/index';
import { postColumn } from '../assets/column/index';

const props = defineProps<{
  currentPage: number;
  rowsPerPage: number;
  routeInfo: string;
}>();

const emit = defineEmits(['update:totalPages']);

const rows = ref<PostData[]>([]);
const pagination = ref({
  page: props.currentPage,
  rowsPerPage: props.rowsPerPage,
  totalPages: 0,
});
const routeCheck = ref(props.routeInfo);

const fetchPosts = async () => {
  var type = 'total';
  if (routeCheck.value == '/notice_posts') {
    type = 'notice';
  }
  try {
    const response = await posts(
      pagination.value.page,
      pagination.value.rowsPerPage,
      type
    );
    rows.value = response.items.map((item: PostDto) => ({
      brdId: item.post_id,
      postTitle: item.post_title,
      writer: item.post_username,
      department: item.mem_address1,
      postDatetime: item.post_datetime,
      postHit: item.post_hit,
    }));
    pagination.value.totalPages = response.totalPages;
    emit('update:totalPages', response.totalPages);
  } catch (error) {
    console.error('게시물 가져오기 실패: ', error);
  }
};

watch(
  () => props.routeInfo,
  (newRouteInfo) => {
    routeCheck.value = newRouteInfo;
    fetchPosts();
  }
);

watch(
  () => props.currentPage,
  (newPage) => {
    pagination.value.page = newPage;
    fetchPosts();
  }
);

onMounted(fetchPosts);
</script>
