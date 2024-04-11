<script setup lang="ts">
import { object, string, number, type InferType } from 'yup';
// import { } from 'vue';
import type { PaymentType, Travel } from '~/types';
import SearchTravelBox from './SearchTravelBox.vue';
import PaymentTypeSelect from './PaymentTypeSelect.vue';
import type { FormSubmitEvent } from '#ui/types'
import { useBookingStore } from '~/store/bookingStore';

export type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
};

type Schema = InferType<typeof schema>

const props = defineProps({
  step: {
    type: Number,
    required: true
  }
})
const bookingStore = useBookingStore();

const schema = object({
  name: string().required('Required'),
  email: string().email('Invalid email').required('Required'),
  phone: string().required('Required'),
  age: number().required('Required').positive().integer(),
  gender: string().required('Required')
});

const customerState = ref({
  name: "",
  email: "",
  phone: "",
  age: 0,
  gender: ""
});

const travelId = ref(0);
const paymentType = ref('');

const handleSelectPaymentType = (selectedPaymentType: PaymentType) => {
  paymentType.value = selectedPaymentType;
};

const handleTravelSelected = (selectedTravelId: Travel["id"]) => {
  travelId.value = selectedTravelId;
};

const onSubmit = (event: FormSubmitEvent<Schema>) => {
  console.log("onSubmit");
  if (travelId.value && paymentType.value) {
   const bookingData = {
    id: bookingStore.bookings.length + 1,
    travelId: travelId.value,
    customersInfo: {...event.data},
    paymentType: paymentType.value,
    notes: "",
   };  
  bookingStore.addBooking(bookingData);
  }
};
defineExpose({ onSubmit });

</script>
<template>
  <div class="add-edit-travel-form" style="width: 500px;">
    Step: {{ props.step }}
    <UForm :schema="schema" :state="customerState" class="space-y-4" @submit="onSubmit">
      <UFormGroup v-show="props.step === 1">
        <SearchTravelBox  @travelSelected="handleTravelSelected" />
      </UFormGroup>
      <div v-show="props.step === 2">
        <UFormGroup label="Name" name="name">
          <UInput v-model="customerState.name" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
          <UInput v-model="customerState.email" />
        </UFormGroup>
        <UFormGroup label="Phone" name="phone">
          <UInput v-model="customerState.phone" />
        </UFormGroup>
        <UFormGroup label="Age" name="age">
          <UInput v-model="customerState.age" type="number" />
        </UFormGroup>
        <UFormGroup label="Gender" name="gender">
          <UInput v-model="customerState.gender" />
        </UFormGroup>
      </div>
      <UFormGroup v-show="props.step === 3">
        <PaymentTypeSelect
          @selectPaymentType="handleSelectPaymentType"
        />
      </UFormGroup>
    </UForm>
  </div>
</template>