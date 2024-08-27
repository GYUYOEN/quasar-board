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
        <div class="col">
          <div class="text-caption">
            {{ post.post_username }} | {{ post.mem_address1 }} |
            {{ post.mem_address3 }}
          </div>
          <div class="row justify-between items-center q-mt-xs">
            <div class="text-caption">
              게시날짜: {{ formatDate(post.post_datetime) }}
            </div>
            <div class="row items-center q-gutter-sm">
              <span class="text-caption">댓글 {{ commentCount }}</span>
              <span class="text-caption">조회 {{ post.post_hit }}</span>
              <span class="text-caption">좋아요 {{ post.post_like }}</span>
            </div>
          </div>
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
        <span class="q-ml-sm">{{ post.post_like }} 좋아요</span>
      </div>
    </q-card-section>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { date } from 'quasar';
import { usePostsStore } from '../stores/postsStore';
import { useCommentsStore } from '../stores/commentsStore';

const postsStore = usePostsStore();
const commentsStore = useCommentsStore();

const post = computed(() => postsStore.selectedPost);

const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'YYYY-MM-DD HH:mm');
};

const commentCount = computed(() => commentsStore.getCommentCount);

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
