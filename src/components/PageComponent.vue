<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="currentPageModel"
      :max="totalPages"
      :max-pages="9"
      :ellipses="false"
      :boundary-numbers="false"
      direction-links
      boundary-links
      icon-first="skip_previous"
      icon-last="skip_next"
      icon-prev="fast_rewind"
      icon-next="fast_forward"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits(['update:currentPage']);

const currentPageModel = computed({
  get: () => props.currentPage,
  set: (value) => emit('update:currentPage', value),
});
</script>
