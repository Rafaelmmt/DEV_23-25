<template>
  <q-expansion-item
    v-if="menu.submenu"
    :icon="menu.icon"
    :label="menu.title"
    clickable
    group="menu lateral"
  >
    <q-item
      v-for="submenu in menu.submenu"
      :key="submenu.title"
      clickable
      class="menu-color"
    >
      <q-item-section avatar>
        <q-icon :name="submenu.icon" />
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ submenu.title }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-expansion-item>

  <q-item v-else clickable>
    <q-item-section avatar>
      <q-icon :name="menu.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ menu.title }}</q-item-label>
    </q-item-section>

    <q-item-section v-if="seeFlag" avatar>
      <q-icon :name="menu.flag" />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  menu: {
    type: Object,
    required: true,
  },
});

const seeFlag = ref(true);
</script>

<style>
.menu-color {
  background-color: #3b3b3b;
  padding-left: 35px;
}
</style>
