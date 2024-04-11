<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from './CustomerForm.vue';

const step = ref(1);

const nextStep = () => {
  if (step.value < 3) {
    step.value += 1;
  }
};

const prevStep = () => {
  if (step.value > 1) {
    step.value -= 1;
  }
};
</script>
<template>
  <div class="wizard">
    <CustomerForm :step="step"/>
    <div class="wizard-footer">
      <button @click="prevStep">Previous</button>
      <button v-if="step !== 3" @click="nextStep">Next</button>
    </div>
  </div>
</template>