<template>
  
  <h1>📖 Estante Virtual</h1>
  <div class="header-btns">
    <button class="btn" @click="$emit('addClick')">
      Adicionar Livro +
    </button>
    <button class="btn" @click="tableView = !tableView">
      Visualizar Lista
    </button>
  </div>

  <div class="books-container" v-if="!tableView">  
    <div class="books-list">

      <!-- LIVROS >>> v-FOR BOOKLIST -->
      <div v-for="livro in listaLivros" :key="livro.id">
        <div class="book">
          
          <div class="readIt" v-if="livro.isRead">
            <i class="fa-solid fa-eye"></i>
          </div>
          
          <div class="book-cover">
            <img :src="livro.cover" />
            <!-- 
              <button :class="{isRead : livro.isRead}" @click="readItFunction(livro)">
                <i class="fa-solid fa-eye"></i>
                <span>{{ livro.isRead ? "Lido" : "Não lido" }}</span>
              </button> 
            -->
            <button :class="{isRead : livro.isRead}" @click="$emit('callReadItFunction', livro)">
              <i class="fa-solid fa-eye"></i>
              <span>{{ livro.isRead ? "Lido" : "Não lido" }}</span>
            </button>
          </div>
          
          <div class="book-details">
            <p class="book-author">{{ livro.author }}</p>
            <h3 class="book-title">{{ livro.title }}</h3>
            <p><i class="fa-solid fa-hashtag icon"></i>{{ livro.isbn }}</p>
          </div>
        
        </div>
      </div>

    </div>
  </div>
  <div class="books-container" v-else-if="tableView">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN#</th>
          <th>Read it?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="livro in listaLivros" :key="livro.id">
          <td>{{ livro.title }}</td>
          <td>{{ livro.author }}</td>
          <td>{{ livro.isbn }}</td>
          <td><input type="checkbox" id="checkbox" v-model="livro.isRead" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { type Book } from './books'

// PROPS e EMITS
defineProps<{
  listaLivros: Book[]
  //readItFunction:(livro:Book)=>void
}>()
defineEmits<{
  (e:'callReadItFunction', livro: Book):void
  (e:'addClick'):void
  (e:'listClick'):void
}>()

const tableView = ref(false)

</script>