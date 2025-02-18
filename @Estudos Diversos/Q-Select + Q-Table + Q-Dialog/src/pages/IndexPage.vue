<template>
  <q-page class="flex flex-center">
    <CompQSelect /> 
    <CompQTQD />
    <q-btn @click="goTo('/teste02')">Teste02</q-btn>   
  </q-page>
</template>

<script setup>
import CompQSelect from 'src/components/CompQSelect.vue'
import CompQTQD from 'src/components/CompQTQD.vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const goTo = (rota) => {
  router.push(rota)
}
</script>
