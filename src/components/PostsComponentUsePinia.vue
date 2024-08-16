<!-- <template>
  <div class="q-pa-md">
    <q-table
      flat
      bordered
      :title="store.tableTitle"
      :rows="store.posts"
      :columns="postColumn"
      :rows-per-page-options="[store.rowsPerPage]"
      row-key="postId"
      hide-bottom
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { usePostsStore } from '../stores/postsStore';
import { postColumn } from '../assets/column/index';

const props = defineProps<{
  routeInfo: string;
}>();

const store = usePostsStore();
watch(
  () => props.routeInfo,
  (newRoute) => {
    store.setCurrentRoute(newRoute);
  }
);

onMounted(() => {
  store.setCurrentRoute(props.routeInfo);
})
</script> -->
