<template>
  <q-page class="page">
    <q-card class="full-width">
      <div class="title">{{ store.chartTitle }}</div>
      <div class="content">
        <component :is="chart[store.chartMenu]" />
      </div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import ChartBar from 'src/components/ChartBar.vue'
import ChartPie from 'src/components/ChartPie.vue'

// DECLARANDO COMPONENTES
const chart = {
  bar: ChartBar,
  pie: ChartPie
}

// PINIA STORE
import { useMainStore } from 'src/stores/main-store'
const store = useMainStore()
</script>
