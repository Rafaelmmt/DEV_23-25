<template>

  <h1>📖 Add a new Book</h1>
    
  <div class="header-btns">
    <button class="btn" @click="$emit('closeAddPage')">
      Close x
    </button>
  </div>

  <form class="add-form">
    
    <div class="form-control">  
      <label>Title</label>
      <input
        type="text" name="text"
        placeholder="Add Book Title"
        v-model="title"

      />
    </div>

    <div class="form-control">
      <label>Book Cover</label>
      <input type="text" name="cover" placeholder="Add Cover" v-model="cover" />
    </div>

    <div class="form-control">
      <label>Author</label>
      <input
        type="text" name="author"
        placeholder="Add Author"
        v-model="author"
      />
    </div>

    <div class="form-control">
      <label>ISBN#</label>
      <input type="text" name="isbn" placeholder="Add ISBN" v-model="isbn" />
    </div>

    <div class="form-control form-control-check">
      <input type="checkbox" name="readIt" id="readIt" v-model="isRead" />
      <label for="readIt">I have read it already</label>
    </div>
    
    <button type="submit" class="btn btn-block" @click.prevent="addBook()" >Save Book</button>
  
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineEmits } from 'vue'

// PROPS e EMITS
const emit = defineEmits<{
  (e:'closeAddPage'):void
  (e:'novoLivro', Book: any):void
}>()

const id = ref<number>(4)
const title = ref<string|null>(null)
const cover = ref<string|null>(null)
const isRead = ref<boolean>(false)
const author = ref<string|null>(null)
const isbn = ref<string|null>(null)

// FUNÇÃO ADICIONAR NOVO LIVRO

const addBook = () => {

  if (!title.value) {
    alert('O título do livro deve ser informado!')
  } else if (!cover.value) {
    alert('Uma URL para a imagem de capa do livro deve ser informada!')
  } else if (!author.value) {
    alert('O nome do author da obra deve ser informado!')
  } else if (!isbn.value) {
    alert('O ISBN do livro deve ser informado!')
  }else {
    let newBook = {
      id:id.value,
      title: title.value,
      cover: cover.value,
      isRead: isRead.value,
      author: author.value,
      isbn: isbn.value
      
    }
    emit('novoLivro', {Book: newBook}) 
  } 
}
</script>