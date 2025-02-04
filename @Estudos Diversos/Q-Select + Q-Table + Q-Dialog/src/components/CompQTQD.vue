<template>
  <div class="full-width q-pa-xl">
    
    <!-- TABELA -->
    <q-table
      title="FILMES"
      class="q-py-md q-px-xl"
      row-key="id"
      :rows="store.filtroTabela(store.arrayOfObjects, store.opSelecionada)"
      :columns="columns"
      :filter="filterTable"
      :pagination="{ sortBy: 'nome', rowsPerPage: 5 }"
      :rows-per-page-options="[ 1, 5, 10, 0 ]"
    >
      <template v-slot:top-right>
        <q-input borderless dense :debounce="500" v-model="filterTable" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
        <q-btn
          class="q-ml-lg"
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable()"
        />
      </template>

      <template #body="props">
        <q-tr :props="props" class="cursor-pointer" @click="openDialog(props.row)">
          <q-td key="nome" class="row-tabela">{{ props.row.nome }}</q-td>
          <q-td key="diretor" class="row-tabela">{{ props.row.diretor }}</q-td>
          <q-td key="ano" class="row-tabela">{{ props.row.ano }}</q-td>
          <q-td key="nota" class="row-tabela">{{ props.row.nota }}</q-td>
        </q-tr>
      </template>
    </q-table>

    <!-- MODAL - MORE INFO -->
    <q-dialog
      v-model="modelDialog"
      transition-show="slide-up"
      transition-hide="slide-down"
    >

      <div class="row full-width" style="max-height: 80vh; max-width: 60vw;">

        <div style="width: 50%;">
          <q-card class="q-ma-sm" style="height: 75vh;">
            <q-card-section>
              <div class="text-h6">Detalhes</div>
            </q-card-section>
            <q-card-section class="q-pt-none">{{ `Filme: "${selectedRow.nome}"` }}</q-card-section>
            <q-card-section class="q-pt-none">{{ selectedRow }}</q-card-section>
          </q-card>
        </div>
        <div class="column" style="width:50%;">

          <q-card class="q-ma-sm">
            <q-card-section>
              <div class="text-h6">Histórico 01</div>
            </q-card-section>
            <q-card-section class="q-pt-none">Nome</q-card-section>
            <q-card-section class="q-pt-none">Data</q-card-section>
          </q-card>
          <q-card class="q-ma-sm">
            <q-card-section>
              <div class="text-h6">Histórico 02</div>
            </q-card-section>
            <q-card-section class="q-pt-none">Nome</q-card-section>
            <q-card-section class="q-pt-none">Data</q-card-section>
          </q-card>

          
        </div>
      
      </div>

    </q-dialog>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { exportFile, useQuasar } from 'quasar'

// PINIA STORE
import { useMainStore } from 'src/stores/mainStore'
const store = useMainStore()

const $q = useQuasar()

const columns = ref([
  { name: 'nome', label: 'Nome', field:'nome', sortable: true, align: 'center' },
  { name: 'diretor', label: 'Diretor', field: 'diretor', sortable: true, align: 'center' },
  { name: 'ano', label: 'Data de Lançamento', field:'ano', sortable: true, align: 'center' },
  { name: 'nota', label: 'Nota Site', field: 'nota', sortable: true, align: 'center' }
  
])

const filterTable = ref(null)

const modelDialog = ref(false)
const selectedRow = ref({})
const openDialog = (row) => {
  modelDialog.value = true
  selectedRow.value = row
} 

const wrapCsvValue = (val, formatFn, row) => {
  let formatted = formatFn !== void 0
    ? formatFn(val, row)
    : val
  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)
  formatted = formatted.split('"').join('""')
  return `"${formatted}"`
}

// FUNÇÃO CONSIDERANDO APENAS PESQUISA POR CAMPOS
/*
const exportTable = () => {
  const content = [columns.value.map(col => wrapCsvValue(col.label))].concat(
    store.opFiltrada().map(row => columns.value.map(col => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[ col.field === void 0 ? col.name : col.field ],
      col.format,
      row
    )).join(','))
  ).join('\r\n')

  const status = exportFile(
    'table-export.csv',
    content,
    'text/csv'
  )

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}*/

// FUNÇÃO CONSIDERANDO PESQUISA POR CAMPOS + FILTRO 
const exportTable = () => {
  const filteredRows = store.opFiltrada().filter(row => {
    const searchTerm = filterTable.value ? filterTable.value.toLowerCase() : '';
    return Object.values(row).some(val =>
      String(val).toLowerCase().includes(searchTerm)
    );
  });
  const content = [columns.value.map(col => wrapCsvValue(col.label))].concat(
    filteredRows.map(row => columns.value.map(col => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[ col.field === void 0 ? col.name : col.field ],
      col.format,
      row
    )).join(','))
  ).join('\r\n');

  const status = exportFile(
    'table-export.csv',
    content,
    'text/csv'
  );

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    });
  }
}

// Limpar filtro tabela 
watch(store.opSelecionada, () => {
  filterTable.value = null
})
</script>

<style>
.row-tabela {
  text-align: center;
}
</style>
