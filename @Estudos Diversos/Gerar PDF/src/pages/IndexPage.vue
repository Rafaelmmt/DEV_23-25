<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="Gerar PDF" icon="picture_as_pdf" color="red-5" padding="lg" no-caps @click="gerarPdf()" />
  </q-page>
</template>

<script setup lang="ts">
import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";

const gerarPdf = () => {

  const docDefinition = {
    content: [
      'First paragraph',
      'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
    ]
  }

  pdfMake.createPdf(docDefinition).open()

}
</script>
