<!-- <template>
  <q-page class="column items-center justify-start">
    <div class="col-12 q-pa-md">
      <posts-component
        :current-page="currentPage"
        :rows-per-page="rowsPerPage"
        :route-info="currentRoute"
        @update:total-pages="totalPages = $event"
      ></posts-component>
    </div>
    <div class="col-12 q-pa-md">
      <page-component
        v-model:current-page="currentPage"
        :total-pages="totalPages"
      ></page-component>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import PostsComponent from 'components/PostsComponent.vue';
import PageComponent from 'components/PageComponent.vue';

const route = useRoute();
const currentPage = ref(1);
const rowsPerPage = ref(20);
const totalPages = ref(0);

const currentRoute = computed(() => route.fullPath);
</script> -->
