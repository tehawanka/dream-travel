<script setup lang="ts">
import { ref } from 'vue';
import SearchTravelBox from './SearchTravelBox.vue';
import CustomerForm, { type CustomerFormData } from './CustomerForm.vue';
import PaymentTypeSelect from './PaymentTypeSelect.vue';
import type { PaymentType, Travel } from '~/types';

const step = ref(1);
const travelId = ref(0);
const paymentType = ref('');
const customerFormRef = ref(null);
const shouldBeSubmitted = ref(false);

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

const setShouldBeSubmitted = () => {
  console.log('setShouldBeSubmitted');
  shouldBeSubmitted.value = true;
};

// const handleFormSubmit = (formData: CustomerFormData) => {
//   if (travelId.value && paymentType.value) {
//    const bookingData = {
//      travelId: travelId.value,
//      paymentType: paymentType.value,
//      ...formData
//    };
//    console.log(bookingData);
//   }
// };

const handleSelectPaymentType = (selectedPaymentType: PaymentType) => {
  paymentType.value = selectedPaymentType;
};

const handleTravelSelected = (selectedTravelId: Travel["id"]) => {
  travelId.value = selectedTravelId;
};

</script>
<template>
  <div class="wizard">
    <div v-if="step === 1">
      <h1>Step 1</h1>
      <SearchTravelBox @travelSelected="handleTravelSelected" />
    </div>
    <div v-else-if="step === 2">
      <CustomerForm @submit="handleFormSubmit" :shouldBeSubmitted="shouldBeSubmitted"/>
    </div>
    <div v-else>
      <PaymentTypeSelect @selectPaymentType="handleSelectPaymentType" />
    </div>
    <div class="wizard-footer">
      <button @click="prevStep">Previous</button>
      <button v-if="step !== 3" @click="nextStep">Next</button>
      <button v-else @click="setShouldBeSubmitted">Submit</button>
    </div>
  </div>
</template>