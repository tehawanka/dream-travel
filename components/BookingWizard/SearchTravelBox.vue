<script setup lang="ts">
import {useTravelStore} from '~/store/travelsStore';
import type {Travel} from '~/types';

const { travels }= useTravelStore();


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

