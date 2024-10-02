<template>
  <q-page class="items-center justify-start">
    <post-content-component></post-content-component>
    <file-list-component></file-list-component>
    <comment-component></comment-component>
  </q-page>
</template>

<script setup lang="ts">
import PostContentComponent from 'src/components/community/content/PostContent.vue';
import FileListComponent from 'src/components/community/file/FileList.vue';
import CommentComponent from 'src/components/community/comment/PostComment.vue';
</script>
