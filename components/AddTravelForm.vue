<script setup lang="ts">
import { object, string, number, type InferType } from 'yup'
import { useTravelStore } from '~/store/travelsStore';

const props = defineProps({
    closeModal: {
      type: Function,
      required: true
    }
  });

const store = useTravelStore();
const schema = object({
  name: string().required('Required'),
  departureDates: string(),
  picture: string(),
  description: string().required('Required'),
  price: number().required('Required').positive().integer(),
  rating: number().required('Required').positive().integer().max(5)
});

const state = ref({
  name: "",
  departureDates: "",
  picture: "",
  description: "",
  price: 0,
  rating: 5
});

async function onSubmit (event) {
  store.addTravel(event.data);
  props.closeModal("add");
}
</script>

<template>
  <div class="add-edit-travel-form" style="width: 500px; padding: 1em">
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Departure Dates" name="departureDates">
        <UInput v-model="state.departureDates" />
      </UFormGroup>

      <UFormGroup label="Picture" name="picture">
        <UInput v-model="state.picture" />
      </UFormGroup>

      <UFormGroup label="Description" name="description">
        <UInput v-model="state.description" />
      </UFormGroup>

      <UFormGroup label="Price" name="price">
        <UInput v-model="state.price" type="number" />
      </UFormGroup>

      <UFormGroup label="Rating" name="rating">
        <UInput v-model="state.rating" type="number" />
      </UFormGroup>

      <UButton type="submit" class="bg-red-700 hover:bg-red-600">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

