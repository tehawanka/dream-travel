<script setup lang="ts">
import { ref } from 'vue';
import CustomerForm from './CustomerForm.vue';

const props = defineProps({
  closeModal: {
    type: Function,
    required: true
  }
});
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
const formRef = ref(null);
const handleSubmit = () => {
  if (formRef.value) {
    formRef?.value.onSubmit();
    props.closeModal();
  }
};
</script>
<template>
   <UCard 
    :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }" 
    style="width: 600px; height: 600px; padding: 10px auto;"
    >
      <div class="h-500">
        <CustomerForm :step="step" ref="formRef"/>
      </div>
        <template #footer>
          <UButton label="Previous" @click="prevStep" />
          <UButton v-if="step !== 3" label="Next" @click="nextStep" />
          <UButton v-if="step === 3" label="Submit" @click="handleSubmit" />
        </template>
      
    </UCard>
</template>