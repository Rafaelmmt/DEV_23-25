<template>
  <Pie
    :data="dataStore.pieData"
    :options="dataStore.pieOpt"
  />
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

// PINIA STORE
import { useDataStore } from 'src/stores/data-store'
const dataStore = useDataStore()
</script>
