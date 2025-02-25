<template>
  <q-layout view="lHh Lpr lFf">

    <q-header elevated>
      <q-toolbar>
        <q-btn @click="menuAtivo = !menuAtivo" icon="menu" aria-label="Menu" flat dense round />
        <q-toolbar-title>Gráficos (Chart.js + vue-chartjs)</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="menuAtivo" show-if-above bordered>
      <q-list bordered separator>

        <q-item-label header>
          GRÁFICOS
        </q-item-label>

        <q-separator></q-separator>

        <q-item clickable v-ripple>
          <q-item-section class="q-ml-md" @click="store.chartMenu = 'bar', store.funcCharts()">
            Gráfico de Barra
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="q-ml-md" @click="store.chartMenu = 'pie', store.funcCharts()">
            Gráfico de Pizza
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="q-ml-md">
            Single line item
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section class="q-ml-md">
            Single line item
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// PINIA STORE
import { useMainStore } from 'src/stores/main-store'
const store = useMainStore()

const menuAtivo = ref<boolean>(false)
</script>
