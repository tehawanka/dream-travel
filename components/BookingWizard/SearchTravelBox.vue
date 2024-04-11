<script setup lang="ts">
import {useTravelStore} from '~/store/travelsStore';
import type {Travel} from '~/types';
import { ref } from 'vue';

const { travels } = useTravelStore();
const selected: globalThis.Ref<Travel | string> = ref('');
const emit = defineEmits(['travelSelected']);

const emitSelectedTravelId = () => {
  if (selected.value) {
      emit('travelSelected', (selected.value as Travel).id);
  }
}

onMounted(() => {
  emitSelectedTravelId();
});

onUpdated(() => {
  emitSelectedTravelId();
});

</script>
<template>
  <UInputMenu
    v-model="selected"
    :options="travels"
    placeholder="Select a travel"
    by="id"
    option-attribute="name"
    :search-attributes="['name']"
  >
    <template #option="{ option: travel }">
      <span class="truncate">{{ travel.name }}</span>
    </template>
  </UInputMenu>
</template>

