<!-- <template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="currentPage"
      :max="store.totalPages"
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
import { usePostsStore } from '../stores/postsStore';

const store = usePostsStore();

const currentPage = computed({
  get: () => store.currentPage,
  set: (value) => store.setCurrentPage(value),
});
</script> -->
