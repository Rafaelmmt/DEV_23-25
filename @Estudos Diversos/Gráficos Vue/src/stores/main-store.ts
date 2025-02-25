import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('mainStore', () => {

  const chartMenu = ref<'bar'|'pie'>('bar')
  const chartTitle = ref<string>('Gráfico de Barra')
  const funcCharts = ():void => {
    switch(chartMenu.value) {
      case 'bar':
        chartTitle.value = 'Gráfico de Barra'
        break
      case 'pie':
        chartTitle.value = 'Gráfico de Pizza'
        break
      default:
        chartTitle.value = 'Gráficos Vue'
    }
  }

  return { chartMenu, chartTitle, funcCharts }

})
