<template>
  <div class="p-4 mb-5" :class="`has-background-${ props.cardBgColor }-dark`">
    <div class="mb-4">
      <label v-if="props.labelOn" class="has-text-white"> {{ labelOn }} </label>
    </div>
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="refocusBox" 
          class="textarea" 
          maxlength="100"
          :placeholder="props.placeholderText"
          v-autofocus
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

// PROPS E EMITS
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  cardBgColor: {
    type: String,
    default: 'success'
  },
  placeholderText: {
    type: String,
    default: 'Escreva uma nova nota...'
  },
  labelOn:{
    type: String
  }
})
// eslint-disable-next-line no-unused-vars
const emit = defineEmits(['update:modelValue'])

// FUNÇÃO FOCUS TEXTAREA
const refocusBox = ref(null)
const focusTextarea = () => {
  refocusBox.value.focus()
}

defineExpose({
  focusTextarea
})
</script>