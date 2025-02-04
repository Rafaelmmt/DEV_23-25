<template>
  <div class="questions-ctr">
      
    <div class="progress">
      <div 
        class="bar"
        :style="{ width: `${(questionsAnswered/questions.length) * 100}%`}"
      >
      </div>
      <div class="status">
        {{ `${questionsAnswered} out of ${questions.length} questions answered` }}
      </div>
    </div>
    
    <transition-group name="fade">
      <div 
        class="single-question"
        v-for="(question, index) in questions"
        :key="question.q"
        v-show="questionsAnswered === index"
      >
        <div class="question">{{ question.q }}</div>
        <div class="answers">
          <div 
            class="answer"
            v-for="answer in question.answers"
            :key="answer.text"
            @click.prevent="userAnswer(answer.is_correct)"
          >
            {{ answer.text }}
          </div>
        </div>
      </div>
    </transition-group>
  
  </div>
</template>

<script setup>
// PROPS E EMITS 
import { defineEmits } from 'vue'
const props = defineProps(['questions', 'questionsAnswered'])
const emit = defineEmits(['userAnswer'])

// 
const userAnswer = (isCorrect) => {
  emit('userAnswer', isCorrect)
} 


</script>