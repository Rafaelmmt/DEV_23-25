<template>
  <Bar
    :data="dataStore.barData"
    :options="dataStore.barOpt"
  />
</template>

<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// PINIA STORE
import { useDataStore } from 'src/stores/data-store'
const dataStore = useDataStore()
</script>
