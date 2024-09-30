<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
    <q-header class="woori-header">
      <q-toolbar>
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          class="burger-header"
        />
        <q-toolbar-title>
          <a href="/home"
            ><img
              src="../assets/logo/Woori_logo.png"
              class="company-logo"
              alt="Woori Logo"
          /></a>
        </q-toolbar-title>
        <q-input
          dense
          outlined
          v-model="search"
          placeholder="리소스, 서비스 및 문서 검색(G+/)"
          class="q-ml-md"
          bg-color="white"
          color="grey-7"
          style="width: 500px"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-space />
        <q-btn flat round dense icon="notifications" class="q-mr-sm">
          <q-badge color="red" floating>1</q-badge>
        </q-btn>
        <q-btn flat round dense icon="settings" class="q-mr-sm" />
        <q-btn flat round dense icon="help_outline" class="q-mr-sm" />
        <q-btn flat no-caps class="q-ml-sm">
          <q-avatar size="35px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <div class="q-ml-sm">
            <div style="margin-bottom: -5px">kbs@woorihom.co.kr</div>
            <div class="text-caption">정보화추진팀 매니저</div>
          </div>

          <q-menu
            fit
            anchor="bottom right"
            self="top right"
            style="min-width: 250px; background-color: rgb(52, 143, 108)"
          >
            <q-list style="min-width: 100px">
              <q-item class="q-pa-md">
                <q-item-section avatar>
                  <q-avatar size="50px" color="grey-6" text-color="white">
                    H
                    <q-badge
                      floating
                      color="grey-6"
                      style="
                        bottom: 2px;
                        right: 2px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 16px;
                        height: 16px;
                      "
                    >
                      <q-icon name="edit" size="10px" color="white" />
                    </q-badge>
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-white text-weight-bold"
                    >honey chaser</q-item-label
                  >
                  <q-item-label caption class="text-white"
                    >dtdy87@gmail.com</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-separator dark />

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="brightness_4" color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-white">Theme</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon name="chevron_right" color="white" />
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="settings" color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-white">Settings</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator dark />

              <q-item clickable v-ripple @click="handlelogout">
                <q-item-section avatar>
                  <q-icon name="logout" color="white" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-white">로그아웃</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      class="custom-drawer"
      v-model="drawer"
      show-if-above
      :mini="!drawer || miniState"
      @click.capture="drawerClick"
      :width="250"
      :mini-width="50"
      :breakpoint="450"
    >
      <div class="drawer-content">
        <q-scroll-area class="fit woori-drawer">
          <q-list padding>
            <q-item clickable v-ripple to="/home">
              <q-item-section avatar>
                <q-icon name="home" size="xs" />
              </q-item-section>

              <q-item-section> 홈 </q-item-section>
            </q-item>

            <q-expansion-item
              icon="perm_identity"
              expand-icon-class="text-white"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="forum" class="text-white" />
                </q-item-section>
                <q-item-section>
                  <span class="text-white">소통센터</span>
                </q-item-section>
              </template>
              <q-list class="q-pl-md">
                <q-tree
                  :nodes="simple"
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
            </q-expansion-item>

            <q-expansion-item
              icon="perm_identity"
              label="업무센터"
              expand-icon-class="text-white"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="business_center" class="text-white" />
                </q-item-section>
                <q-item-section>
                  <span class="text-white">업무센터</span>
                </q-item-section>
              </template>
              <q-list padding class="q-pl-md custom-list">
                <q-item to="" clickable v-ripple>
                  <q-item-section>영업관리 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>사업장관리 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>도급관리 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>인사면접 핸드북</q-item-section>
                </q-item>
                <q-item clickable v-ripple>
                  <q-item-section>회계점검 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>과태료 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>SNC업무 핸드북</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>우리TIMS 메뉴얼</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>

            <q-expansion-item label="자료센터" expand-icon-class="text-white">
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="library_books" class="text-white" />
                </q-item-section>
                <q-item-section>
                  <span class="text-white">자료센터</span>
                </q-item-section>
              </template>
              <q-list class="q-pl-md custom-list">
                <q-item to="" clickable v-ripple>
                  <q-item-section>양식·서식</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>규정</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>관계 법령</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>교육자료</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>우리관리 FAQ</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>우리관리 100문 100답</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>공동주택과 위탁관리</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
            <q-expansion-item
              label="안전보건이행점검"
              expand-icon-class="text-white"
            >
              <template v-slot:header>
                <q-item-section avatar>
                  <q-icon name="health_and_safety" class="text-white" />
                </q-item-section>
                <q-item-section>
                  <span class="text-white">안전보건이행점검</span>
                </q-item-section>
              </template>
              <q-list class="q-pl-md custom-list">
                <q-item to="" clickable v-ripple>
                  <q-item-section>본부별 이행률</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>항목별 이행률</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>이행률 저조사업장</q-item-section>
                </q-item>
                <q-item to="" clickable v-ripple>
                  <q-item-section>위험성평가 미실시</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </q-list>
        </q-scroll-area>
      </div>
      <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
        <q-btn
          dense
          round
          unelevated
          color="green"
          icon="chevron_left"
          @click="miniState = true"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { menuList } from 'src/assets/column';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const drawer = ref(false);
const miniState = ref(true);

const router = useRouter();
const search = ref();
const expanded = ref([]);

interface TreeNode {
  label: string;
  children?: TreeNode[];
}

const simple = ref<TreeNode[]>([]);

simple.value = [
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
];

const handleItemClick = (label: string) => {
  const menuItem = menuList.find((item) => item.label === label);
  if (menuItem) {
    router.push(menuItem.route);
  }
};

const drawerClick = (e: Event) => {
  if (miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
};

const handlelogout = () => {
  console.log('로그아웃 완료!');
};
</script>

<style scoped>
.company-logo {
  width: 120px;
  height: auto;
  margin: 10px 0px 0px 10px;
}
.woori-header {
  background-color: white;
  box-shadow: none;
  z-index: 1;
  height: 60px;
  color: black;
}
.burger-header {
  margin-left: -7px;
  font-size: 12px;
}
.woori-drawer {
  background-color: rgb(52, 143, 108);
  top: 14px;
}
.drawer-content {
  background-color: rgb(52, 143, 108);
  height: 100%;
  border-top-right-radius: 25px;
  overflow: hidden;
  position: relative;
  font-size: 14px !important;
}
.custom-drawer .q-item,
.custom-drawer .q-item__section--avatar .q-icon {
  color: white !important;
}
.custom-drawer .q-item--active,
.custom-drawer .q-item--active .q-item__section--avatar .q-icon {
  color: rgb(52, 143, 108) !important;
  background: white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}
.text-white {
  color: white;
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

.custom-list :deep(.q-item) {
  margin-bottom: -5px; /* 각 항목 사이의 간격을 조절합니다 */
}
</style>
