<template>
  <q-item v-if="type === 'home'" clickable v-ripple>
    <q-item-section avatar>
      <q-icon :name="iconName" size="xs" />
    </q-item-section>

    <q-item-section>
      {{ label }}
    </q-item-section>
  </q-item>

  <q-expansion-item v-else :label="label" expand-icon-class="text-white">
    <template v-slot:header>
      <q-item-section avatar>
        <q-icon :name="iconName" class="text-white" />
      </q-item-section>
      <q-item-section>
        <span class="text-white">{{ label }}</span>
      </q-item-section>
    </template>
    <q-list v-if="type === 'tree'" class="q-pl-md">
      <q-tree
        :nodes="items"
        node-key="label"
        no-connectors
        text-color="white"
        color="white"
        v-model:expanded="expanded"
        class="custom-tree"
      >
        <template v-slot:default-header="prop">
          <div class="row items-center full-width">
            <q-item
              clickable
              v-ripple
              class="full-width q-pl-md"
              @click="handleItemClick(prop.node.label)"
            >
              <q-item-section>
                {{ prop.node.label }}
              </q-item-section>
            </q-item>
          </div>
        </template>
      </q-tree>
    </q-list>
    <q-list v-else padding class="q-pl-md custom-list">
      <q-item
        v-for="item in items"
        :key="item.label"
        :to="item.route"
        clickable
        v-ripple
      >
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-expansion-item>
</template>

<script setup>
import { computed, ref } from 'vue';
import { menuList } from 'src/assets/column';
import { useRouter } from 'vue-router';

const router = useRouter();
const expanded = ref([]);

const props = defineProps({
  icon: String,
  iconName: String,
  label: String,
  type: String,
});

const menuItems = {
  홈: { label: '홈', route: '/' },
  소통센터: [
    { label: '전체공지글보기' },
    { label: '전체게시글보기' },
    {
      label: '공지',
      children: [
        { label: '업무연락' },
        { label: '전사공지' },
        { label: '본사공지' },
      ],
    },
    {
      label: '정보마당',
      children: [
        { label: '우리뉴스' },
        { label: '관리업관련 정보' },
        { label: '우리관리 지식인' },
        { label: '유용한 업무팁 공유' },
        { label: 'CS자료실' },
        { label: '채용정보' },
        { label: '사내제안' },
        { label: '공동구매' },
        { label: '전산시스템 문의' },
      ],
    },
    {
      label: '직원소통',
      children: [
        { label: '관리소장직' },
        { label: '관리직' },
        { label: '기술직' },
        { label: '경리직' },
        { label: '서무직' },
        { label: '커뮤니티직' },
        { label: '자유토크' },
        { label: '경조사' },
      ],
    },
    {
      label: '동호회',
      children: [
        { label: '동호회일반' },
        { label: '산악회' },
        { label: '여소회' },
      ],
    },
  ],
  업무센터: [
    { label: '영업관리 핸드북' },
    { label: '사업장관리 핸드북' },
    { label: '도급관리 핸드북' },
    { label: '인사면접 핸드북' },
    { label: '회계점검 핸드북' },
    { label: '과태료 핸드북' },
    { label: 'SNC업무 핸드북' },
    { label: '우리TIMS 메뉴얼' },
  ],
  자료센터: [
    { label: '양식·서식' },
    { label: '규정' },
    { label: '관계 법령' },
    { label: '교육자료' },
    { label: '우리관리 FAQ' },
    { label: '우리관리 100문 100답' },
    { label: '공동주택과 위탁관리' },
  ],
  안전보건이행점검: [
    { label: '본부별 이행률' },
    { label: '항목별 이행률' },
    { label: '이행률 저조사업장' },
    { label: '위험성평가 미실시' },
  ],
};

const items = computed(() => {
  console.log(menuItems[props.label]);
  return menuItems[props.label] || [];
});

const handleItemClick = (label) => {
  const menuItem = menuList.find((item) => item.label === label);
  if (menuItem) {
    router.push(menuItem.route);
  }
};
</script>

<style scoped>
.custom-drawer .q-item--active,
.custom-drawer .q-item--active .q-item__section--avatar .q-icon {
  color: rgb(52, 143, 108) !important;
  background: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.custom-drawer .q-item,
.custom-drawer .q-item__section--avatar .q-icon {
  color: white !important;
}
.q-drawer .q-list .q-item .q-item__section--avatar .q-icon {
  font-size: 20px !important;
  margin-left: -2px !important;
}
.custom-tree :deep(.q-tree__node) {
  margin-bottom: -15px; /* 각 노드 사이의 간격을 조절합니다 */
}
.custom-tree :deep(.q-tree__node--parent) {
  margin-bottom: -15px; /* 부모 노드의 하단 간격을 더 크게 조절합니다 */
}
</style>
