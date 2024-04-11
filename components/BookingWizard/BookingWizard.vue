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
      <div class="flex justify-end  ">
      <div class="w-80">
        <UButton label="Previous" @click="prevStep" class="mr-2" />
        <UButton v-if="step !== 3" label="Next" @click="nextStep" class="mr-2" />
      </div>
      <div class="grow flex justify-end">
        <UButton 
          v-if="step === 3" 
          label="Submit" 
          @click="handleSubmit" 
          class="mr-2 bg-red-700 hover:bg-red-600" 
        />
      </div>
      </div>
    </template>
  </UCard>
</template>