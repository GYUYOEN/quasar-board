<!-- <template>
  <q-page class="column items-center justify-start">
    <div class="col-12 q-pa-md">
      <posts-component :route-info="currentRoute"></posts-component>
    </div>
    <div class="col-12 q-pa-md">
      <page-component></page-component>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { usePostsStore } from '../stores/postsStore';
import PostsComponent from 'components/PostsComponent.vue';
import PageComponent from 'components/PageComponent.vue';

const route = useRoute();
const store = usePostsStore();

const currentRoute = computed(() => route.fullPath);
watch(currentRoute, (newRoute) => {
  store.setCurrentRoute(newRoute);
});
</script> -->
