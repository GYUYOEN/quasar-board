<template>
  <q-list bordered separator>
    <q-item v-for="comment in comments" :key="comment.cmt_id" class="q-py-md">
      <q-item-section avatar>
        <q-avatar> </q-avatar>
      </q-item-section>

      <q-item-section>
        <!-- <q-item-label class="text-weight-bold">{{
          comment.author
        }}</q-item-label> -->
        <q-item-label caption>{{
          formatDate(comment.cmt_datetime)
        }}</q-item-label>
        <q-item-label class="q-mt-sm">{{ comment.cmt_content }}</q-item-label>

        <div class="row items-center q-mt-sm">
          <q-btn
            flat
            round
            color="grey"
            icon="thumb_up"
            size="sm"
            @click="likeComment(comment.cmt_id)"
          />
          <span class="q-ml-sm">{{ comment.cmt_like }}</span>
          <q-btn
            flat
            round
            color="grey"
            icon="reply"
            size="sm"
            class="q-ml-md"
            @click="replyToComment(comment.cmt_id)"
          />
          <span class="q-ml-sm">Reply</span>
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { date } from 'quasar';
import { useCommentsStore } from '../../../stores/commentsStore';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute();
const store = useCommentsStore();
const { comments } = storeToRefs(store);

onMounted(() => {
  store.setPostId(Number(route.params.postId));
});

const formatDate = (dateString: string | null) => {
  if (!dateString) return '';
  return date.formatDate(dateString, 'MMM D, YYYY HH:mm');
};

const likeComment = (commentId: number) => {
  // 이 기능은 스토어에서 구현하는 것이 좋을 수 있습니다
  console.log(`댓글 ${commentId}에 좋아요`);
};

const replyToComment = (commentId: number) => {
  console.log(`댓글 ${commentId}에 답글 달기`);
};

// const likeComment = (commentId: number) => {
//   const comment = comments.value.find((c) => c.id === commentId);
//   if (comment) {
//     comment.likes++;
//   }
// };

// const replyToComment = (commentId: number) => {
//   console.log(`Replying to comment ${commentId}`);
// };
</script>
