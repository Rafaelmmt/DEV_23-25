<template>
  
  <!-- PÁGINA "ADICIONAR LIVRO"  -->
  <div class="container" v-if="showPage === 'add'">
    <BooksAddPage
      :listaLivros="books" 
      @close-add-page="showPage = 'books'"
      @novo-livro="addNovoLivro"
    />
  </div>
  
  <!-- PÁGINA PRINCIPAL -->
  <div class="container" v-else-if="showPage === 'books'">
    <!-- <BooksSection :listaLivros="books"  :readItFunction="readItFunction" /> -->
    <BooksSection 
      :listaLivros="books" 
      @callReadItFunction="readItFunction"
      @add-click="showPage = 'add'"
    />

    <BookProgressBar :listaLivros="books" />

  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import { booksList, type Book } from './components/books'

// IMPORTAR COMPONENTES
import BooksSection from './components/BooksSection.vue'
import BooksAddPage from './components/BooksAddPage.vue'
import BookProgressBar from './components/BookProgressBar.vue'

// NAVEGAÇÃO PÁGINAS
const showPage = ref<'books'|'add'>('books') 

// CÓPIA REATIVA DA LISTA IMPORTADA
const books = ref<Book[]>([...booksList])

// FUNÇÃO "LIDO-NÃO LIDO"
const readItFunction = (livro:Book) => {
  livro.isRead = !livro.isRead
}

// FUNÇÃO ADICIONAR NOVO LIVRO 
const addNovoLivro = (newBook:any) => {
  books.value.push(newBook)
}
</script>

