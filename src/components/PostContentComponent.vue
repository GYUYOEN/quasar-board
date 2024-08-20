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
