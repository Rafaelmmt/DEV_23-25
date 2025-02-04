<template>
  <q-layout view="hHh lpR fFf">
    <!-- BOTÃO ABRIR MENU LATERAL -->
    <q-page-sticky position="top-left" :offset="[5, 5]" style="z-index: 10000">
      <q-fab
        icon="keyboard_arrow_right"
        active-icon="keyboard_arrow_right"
        color="primary"
        padding="sm"
        @click="toggleLeftDrawer"
        :class="{ invisible: leftDrawerOpen }"
      />
    </q-page-sticky>

    <!-- MENU LATERAL -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
      class="custom-drawer"
    >
      <!-- BOTÃO FECHAR MENU LATERAL -->
      <div class="q-mt-sm q-px-sm text-right">
        <q-btn
          round
          color="primary"
          icon="arrow_back"
          outline
          size="xs"
          clickable
          @click="toggleLeftDrawer"
        />
      </div>
      <!-- CABEÇALHO MENU -->
      <div>
        <div class="flex flex-center text-h6 column q-mt-sm">
          <span>Título</span>
        </div>
        <div class="custom-drawer-separator"></div>
      </div>
      <!-- ITENS DO MENU -->
      <q-list>
        <MenuList v-for="menu in menuList" :key="menu.title" :menu="menu" />
      </q-list>
    </q-drawer>

    <!-- CONTEÚDO PRINCIPAL (via ROUTER-VIEW) -->
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component class="bg-grey-3" :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { menuList } from "src/components/menuList.js";
import MenuList from "components/MenuList.vue";

/* ***** MENU LATERAL (Q-DRAWER) ***** */

// Abrir e fechar menu
const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.custom-drawer {
  background-color: #333333;
  color: #ffffff;
}
.custom-drawer-header {
  height: 150px;
}
.custom-drawer-separator {
  height: 5px;
  background-color: #8c6607;
  margin: 5px 0 5px 0;
}
</style>
