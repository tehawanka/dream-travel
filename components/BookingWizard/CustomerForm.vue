<script setup lang="ts">
import { object, string, number, type InferType } from 'yup';
import { watch, defineEmits, defineExpose } from 'vue';

export type CustomerFormData = {
  name: string;
  email: string;
  phone: string;
  age: number;
  gender: string;
};

const props = defineProps({
  shouldBeSubmitted: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['submit']);


watch(() => props.shouldBeSubmitted, (newValue, oldValue) => {
 console.log('myProp changed from', oldValue, 'to', newValue);
//  emit('submit', state.value);
});

const schema = object({
  name: string().required('Required'),
  email: string().email('Invalid email').required('Required'),
  phone: string().required('Required'),
  age: number().required('Required').positive().integer(),
  gender: string().required('Required')
});

const state = ref({
  name: "",
  email: "",
  phone: "",
  age: 0});

// defineExpose({ state });

</script>
<template>
  <div class="add-edit-travel-form" style="width: 500px;">
    <UForm :schema="schema" :state="state" class="space-y-4">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Phone" name="phone">
        <UInput v-model="state.phone" />
      </UFormGroup>

      <UFormGroup label="Age" name="age">
        <UInput v-model="state.age" type="number" />
      </UFormGroup>

      <UFormGroup label="Gender" name="gender">
        <UInput v-model="state.gender" />
      </UFormGroup>
    </UForm>
  </div>
</template>