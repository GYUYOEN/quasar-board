<template>
  <div class="post-icons">
    <q-icon name="fiber_new" v-if="isNew" color="green" />
    <q-badge color="primary" v-if="commentCount > 0">{{
      commentCount
    }}</q-badge>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useCommentsStore } from '../stores/commentsStore';

const commentStore = useCommentsStore();
const commentCount = ref(0);

const props = defineProps<{
  postDateTime: string;
  postId: number | string;
}>();

console.log(props.postDateTime);

const isNew = computed(() => {
  const postDate = new Date(props.postDateTime);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - postDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 1;
});

onMounted(async () => {
  commentStore.setPostId(Number(props.postId));
  await commentStore.fetchComments();
  commentCount.value = commentStore.getCommentCount;
});
</script>
