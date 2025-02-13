<template>

  <div class="books-read">
    <label for="progress">Your Progress</label>
    <br>
    <progress :value="progressBar" max="100"></progress>
    <p>{{ progressMsg }}</p>
  </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type Book } from './books'

// PROPS e EMITS
const props = defineProps<{
  listaLivros: Book[]
}>()

const livrosLidos = computed(() => props.listaLivros.filter(livro => livro.isRead).length)
const livrosTotal = computed(() => props.listaLivros.length) 
const progressBar = computed(() => Math.ceil((100/livrosTotal.value)*livrosLidos.value))
const progressMsg = computed(() => progressBar.value >= 100 ? 'Todos os livros da estante foram lidos!' : `${livrosLidos.value} de ${livrosTotal.value} livros!`)
</script>