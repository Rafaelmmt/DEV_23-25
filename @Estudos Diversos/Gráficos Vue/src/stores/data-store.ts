import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', () => {

  const barData = {
    labels: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
    datasets: [
      { label: 'Main Info', backgroundColor: '#f87979', data: [ 40, 20, 70, 40, 50, 75, 25, 50, 90, 40, 25, 20 ] }
    ]
  }
  const barOpt = { responsive: true, maintainAspectRatio: false, aspectRatio: 0.5 }

  const pieData = {
    labels: [ 'VueJs', 'EmberJs', 'ReactJs', 'AngularJs' ],
    datasets: [
      { backgroundColor: [ '#41B883', '#E46651', '#00D8FF', '#DD1B16' ], data: [ 40, 20, 75, 25 ] }
    ]
  }
  const pieOpt = { responsive: true }

  return { barData, barOpt, pieData, pieOpt }

})
