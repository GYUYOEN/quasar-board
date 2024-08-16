<template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :title="tableTitle"
      :rows="rows"
      :columns="postColumn"
      :rows-per-page-options="[pagination.rowsPerPage]"
      row-key="postId"
      hide-bottom
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue';
import { getPosts } from '../apicontroller/posts';
import { PostDto, PostData } from '../assets/interfaces/index';
import { menuList, postColumn } from '../assets/column/index';


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
const tableTitle = computed(() => {
  const menuItem = menuList.find((item) => item.route === props.routeInfo);
  return menuItem ? menuItem.label : '';
});

const fetchPosts = async () => {
  const type = props.routeInfo || '/posts';
  try {
    const response = await getPosts(
      pagination.value.page,
      pagination.value.rowsPerPage,
      type
    );
    rows.value = response.items.map((item: PostDto) => ({
      postId: item.post_id,
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

watch(() => props.routeInfo, fetchPosts);

watch(
  () => props.currentPage,
  (newPage) => {
    pagination.value.page = newPage;
    fetchPosts();
  }
);

onMounted(fetchPosts);
</script>
