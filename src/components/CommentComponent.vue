<template>
  <q-list bordered separator>
    <q-item v-for="comment in comments" :key="comment.id" class="q-py-md">
      <q-item-section avatar>
        <q-avatar>
          <img :src="comment.avatar" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-weight-bold">{{
          comment.author
        }}</q-item-label>
        <q-item-label caption>{{ formatDate(comment.date) }}</q-item-label>
        <q-item-label class="q-mt-sm">{{ comment.content }}</q-item-label>

        <div class="row items-center q-mt-sm">
          <q-btn
            flat
            round
            color="grey"
            icon="thumb_up"
            size="sm"
            @click="likeComment(comment.id)"
          />
          <span class="q-ml-sm">{{ comment.likes }}</span>
          <q-btn
            flat
            round
            color="grey"
            icon="reply"
            size="sm"
            class="q-ml-md"
            @click="replyToComment(comment.id)"
          />
          <span class="q-ml-sm">Reply</span>
        </div>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { date } from 'quasar';

const comments = ref([
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://cdn.quasar.dev/img/avatar.png',
    content: 'This is a great post! Thanks for sharing.',
    date: '2023-08-22T10:00:00',
    likes: 5,
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://cdn.quasar.dev/img/avatar3.jpg',
    content: 'I completely agree with your points. Very insightful!',
    date: '2023-08-22T11:30:00',
    likes: 3,
  },
  // Add more comment objects as needed
]);

const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'MMM D, YYYY HH:mm');
};

const likeComment = (commentId: number) => {
  const comment = comments.value.find((c) => c.id === commentId);
  if (comment) {
    comment.likes++;
  }
};

const replyToComment = (commentId: number) => {
  console.log(`Replying to comment ${commentId}`);
};
</script>
