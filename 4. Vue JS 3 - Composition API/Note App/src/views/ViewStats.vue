<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Dados</th>
          <th class="is-flex is-justify-content-center">Valores</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total de Notas</td>
          <td class="is-flex is-justify-content-center">{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Total de Characteres (de todas as notas)</td>
          <td class="is-flex is-justify-content-center">{{ storeNotes.totalCharactersCount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';
const storeNotes = useStoreNotes()
</script>

<style scoped>
.alinhar-centro{
  align-content: center;
}
</style>
