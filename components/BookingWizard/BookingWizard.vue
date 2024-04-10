<script setup lang="ts">
import { ref } from 'vue';
import SearchTravelBox from './SearchTravelBox.vue';

const step = ref(1);
const travel = ref({name: "", id: 0});
// const searchQuery = ref('');

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

const searchTravels = () => {
  // Perform search logic here based on the searchQuery value
  // You can use the searchQuery value to filter travels by name
  // Example: filteredTravels = travels.filter(travel => travel.name.includes(searchQuery.value));
};

</script>
<template>
  <div class="wizard">
    <div v-if="step === 1">
      <h1>Step 1</h1>
      <SearchTravelBox />
    </div>
    <div v-else-if="step === 2">
      <h1>Step 2</h1>
    </div>
    <div v-else>
      <h1>Step 3</h1>
    </div>
    <div class="wizard-footer">
      <button @click="prevStep">Previous</button>
      <button v-if="step !== 3" @click="nextStep">Next</button>
      <button v-else>Finish</button>
    </div>
  </div>
</template>