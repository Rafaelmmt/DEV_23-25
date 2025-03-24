<template>
  <div class="q-ma-xl">
    <q-card class="flex flex-center">
      <div class="q-mx-xl q-mb-xl">
        <h4>Lista de Usuários</h4>
        <div>{{ armas }}</div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'


const armas = ref([])
const listarArmas = async () => {
  try {
    const response = await axios.get('http://localhost:3000/armas')
    armas.value = response.data
  } catch (error) {
    console.log('Erro: ', error)
  }
}
onMounted(() => {
  listarArmas()
})
</script>
