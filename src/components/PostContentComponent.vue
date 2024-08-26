<template>
  <q-page padding>
    <q-card-section>
      <div class="text-h4 q-mb-md">{{ post.post_title }}</div>
      <q-separator />
    </q-card-section>

    <q-card-section>
      <div class="row items-center q-gutter-sm">
        <q-avatar>
          <!-- <img :src="post.profileImage" /> -->
        </q-avatar>
        <div>
          <div class="text-weight-bold">{{ post.post_username }}</div>
          <div class="text-caption">
            {{ post.mem_address1 }} | {{ post.mem_address3 }}
          </div>
        </div>
        <q-space />
        <div class="text-caption">
          게시날짜: {{ formatDate(post.post_datetime) }}
        </div>
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="post-content" v-html="post.post_content"></div>
    </q-card-section>

    <q-card-section>
      <div class="row items-center">
        <q-btn
          :color="post.post_like ? 'red' : 'grey'"
          :icon="post.post_like ? 'favorite' : 'favorite_border'"
          @click="toggleLike"
          flat
          round
        />
        <span class="q-ml-sm">{{ post.post_like || 0 }} 좋아요</span>
      </div>
    </q-card-section>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { date } from 'quasar';
import { usePostsStore } from '../stores/postsStore';

const store = usePostsStore();

const post = computed(() => store.selectedPost);

const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'YYYY-MM-DD HH:mm');
};

const toggleLike = () => {
  // 여기에 좋아요 기능 구현
  // 예: store.toggleLike(post.value.post_id);
  console.log('좋아요 토글');
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
