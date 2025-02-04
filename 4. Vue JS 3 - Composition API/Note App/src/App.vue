<template>
  <NavBar />
  <div class="container is-max-desktop align-content py-4" >
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import NavBar from '@/components/Layout/NavBar.vue'

/***** USE PINIA STORE *****/
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useStoreAuth } from '@/stores/storeAuth'
  
  const storeNotes = useStoreNotes()
  const storeAuth = useStoreAuth()
/*****/

/***** ON MOUNTED *****/
  onMounted(() => {
    storeAuth.usuarioID()
    storeNotes.getNotes()
  })
/*****/
</script>

<style>
@import 'bulma/css/bulma.min.css';
@import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap');

@media (max-width: 1023px) {
  .align-content {
    padding-left: 12px;
    padding-right: 12px;
  }
}
</style>