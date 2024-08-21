<template>
  <div class="q-pa-md" style="max-width: 350px">
    <div class="row items-center q-mb-md">
      <div class="col">
        <span class="text-h6"
          >첨부파일 {{ filesStore.fileTotalCount }} 개
        </span>
      </div>
      <div class="col-auto">
        <q-btn color="primary" label="모두저장" />
      </div>
    </div>

    <q-list dense bordered padding class="rounded-borders">
      <q-item
        v-for="file in filesStore.files"
        :key="file.file_id"
        clickable
        v-ripple
      >
        <q-item-section>
          <q-item-label>{{ file.original_name }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          {{ formatFileSize(file.fileKB) }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useFilesStore } from '../stores/filesStore';

const route = useRoute();
const filesStore = useFilesStore();

onMounted(async () => {
  filesStore.postId = Number(route.params.postId);
  await filesStore.fetchFiles();
});

const formatFileSize = (sizeKB: number) => {
  if (sizeKB < 1024) {
    return `${sizeKB} KB`;
  } else {
    return `${(sizeKB / 1024).toFixed(2)} MB`;
  }
};
</script>
