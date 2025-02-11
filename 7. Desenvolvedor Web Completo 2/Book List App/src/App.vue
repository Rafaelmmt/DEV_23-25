<template>
  <div class="container">
    
    <h1>📖 Estante Virtual</h1>
    <div class="header-btns">
      <button class="btn">Adicionar Livro +</button>
      <button class="btn">Visualizar Lista</button>
    </div>

    <div class="books-container">
      <div class="books-list">

        <!-- LIVROS >>> v-FOR BOOKLIST -->
        <div v-for="livro in listaLivros" :key="livro.id">
          <div class="book">
            <div class="readIt" v-if="livro.isRead">
              <i class="fa-solid fa-eye"></i>
            </div>
            <div class="book-cover">
              <img :src="livro.cover" />
              <button :class="{isRead : livro.isRead}" @click="readItFunction(livro)">
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { booksList, type Book } from './components/books'

// CÓPIA REATIVA DA LISTA IMPORTADA
const listaLivros = ref<Book[]>([...booksList])

// FUNÇÃO "LIDO-NÃO LIDO"
const readItFunction = (livro:Book) => {
  livro.isRead = !livro.isRead  
}

</script>

