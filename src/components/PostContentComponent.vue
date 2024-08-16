<template>
  <q-page padding>
    <q-card class="post-view">
      <q-card-section>
        <div class="text-h4 q-mb-md">{{ post.title }}</div>
        <q-separator />
      </q-card-section>

      <q-card-section>
        <div class="row items-center q-gutter-sm">
          <q-avatar>
            <img :src="post.profileImage" />
          </q-avatar>
          <div>
            <div class="text-weight-bold">{{ post.name }}</div>
            <div class="text-caption">
              {{ post.position }} | {{ post.department }}
            </div>
          </div>
          <q-space />
          <div class="text-caption">
            게시날짜: {{ formatDate(post.postDate) }}
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="post-content" v-html="post.content"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { date } from 'quasar';

interface Post {
  title: string;
  profileImage: string;
  name: string;
  position: string;
  department: string;
  postDate: string;
  content: string;
}

// 실제 사용시 props나 API 호출을 통해 데이터를 가져와야 합니다.
const post = ref<Post>({
  title: '게시글 제목',
  profileImage: 'https://cdn.quasar.dev/img/avatar.png',
  name: '홍길동',
  position: '팀장',
  department: 'IT 부서',
  postDate: '2023-05-20T09:00:00',
  content: '<p>게시글 내용입니다. 여기에 HTML 형식의 내용이 들어갑니다.</p>',
});

const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'YYYY-MM-DD HH:mm');
};
</script>

<style scoped>
.post-view {
  max-width: 800px;
  margin: 0 auto;
}

.post-content {
  line-height: 1.6;
}
</style>
