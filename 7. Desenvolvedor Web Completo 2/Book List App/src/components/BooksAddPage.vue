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
    
    <button type="submit" class="btn btn-block" @click.prevent="addBook" >Save Book</button>

    <pre>{{ listaLivros }}</pre>
    <pre>{{ maiorId }}</pre>
  
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { defineEmits } from 'vue'
import { type Book } from './books'

// PROPS e EMITS
const props = defineProps<{
  listaLivros: Book[]
  //readItFunction:(livro:Book)=>void
}>()

const emit = defineEmits<{
  (e:'closeAddPage'):void
  (e:'novoLivro', Book: any):void
}>()

const maiorId = computed(() => props.listaLivros.reduce((max, livros) => (livros.id > max ? livros.id : max), props.listaLivros[0]?.id ?? 0))
const nextId = computed(() => maiorId.value + 1) 
const id = ref<number>(nextId.value)
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
      id:id.value ++,
      title: title.value,
      cover: cover.value,
      isRead: isRead.value,
      author: author.value,
      isbn: isbn.value
      
    }

    emit('novoLivro', newBook) 

    emit('closeAddPage')
  } 
}
</script>