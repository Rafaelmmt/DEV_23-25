<template>

  <div class="full-width row q-px-xl">
    <q-select
      class="col q-mx-md"
      label="Notas"
      v-model="store.opSelecionada.nota"
      :options="store.selectOptions('nota', store.arrayOfObjects, store.opSelecionada)"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 01"
      v-model="store.opSelecionada.info01"
      :options="store.selectOptions('info01', store.arrayOfObjects, store.opSelecionada)"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 02"
      v-model="store.opSelecionada.info02"
      :options="store.selectOptions('info02', store.arrayOfObjects, store.opSelecionada)"
      clearable
  
    />
    <q-select
      class="col q-mx-md"
      label="Info 03"
      v-model="store.opSelecionada.info03"
      :options="store.selectOptions('info03', store.arrayOfObjects, store.opSelecionada)"
      clearable
    />
    <q-select
      class="col q-mx-md"
      label="Info 04"
      v-model="store.opSelecionada.info04"
      :options="store.selectOptions('info04', store.arrayOfObjects, store.opSelecionada)"
      clearable
    />
  </div>
  <pre>{{ store.opSelecionada }}</pre>

</template>

<script setup>
// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()
</script>