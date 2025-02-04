<template>
  <div class="result">
    <div class="title"> {{ results[resultIndex].title }} </div>
    <div class="desc"> {{ results[resultIndex].desc }} </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
// EMITS E PROPS
const props = defineProps(['results', 'userScore'])

// COMPUTED SCORE
const resultIndex = computed(() => {
  const position = ref(0)
  props.results.forEach((el, index) => {
    if(el.min <= props.userScore && el.max >= props.userScore) {
      position.value = index 
    }
  })
  return position.value
}) 

</script>