<script setup lang="ts">
import { reactive, computed } from 'vue';
import { useTravelStore } from '@/store/travelsStore';
import EditTravelForm from './EditTravelForm.vue';
import AddTravelForm from './AddTravelForm.vue';

const store = useTravelStore();
const deleteTravel = (id) => {
  store.deleteTravel(id);
};
const filter = reactive({
  name: "",
  date: ""
});


const isAddModalOpen = ref(false);
const isEditModalOpen = ref(false);

const closeModal = (target: 'add' | 'edit') => {
  if (target === 'add') {
    isAddModalOpen.value = false;
  } else {
    isEditModalOpen.value = false;
  }
}

const filteredTravels = computed(() => {
  return store.travels.filter(travel => {
    const nameMatch = travel.name.toLowerCase().includes(filter.name.toLowerCase());
    const dateMatch = filter.date ? travel.departureDates === filter.date : true;
    return nameMatch && dateMatch;
  });
});



const selectedTravelId = ref(0);

const handleEditTravel = (id) => {
  selectedTravelId.value = id;
  isEditModalOpen.value = true;
};

</script>
<template>
  <div class="container mx-auto">
    <div class="flex space-between items-center mx-auto">
    <input v-model="filter.name" type="text" placeholder="Search by name" class="h-8 w-60 border border-gray-300 rounded-lg mr-3">
    <input v-model="filter.date" type="date" class="h-8 border border-gray-300 rounded-lg w-60 mr-3">
      <UButton label="Add travel" @click="isAddModalOpen = true" class="h-8" />
    </div>
    
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">id</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Departure Dates</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Picture</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="travel in filteredTravels" :key="travel.id">
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.id }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.name }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.departureDates }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap"><img :src="travel.picture" alt="Travel Picture" class="h-16 w-16 object-cover"></td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.description }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.price }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.rating }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
            <UButton @click="() => handleEditTravel(travel.id)" label="Edit" />
          </td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
            <UButton @click="() => deleteTravel(travel.id)" label="Delete" class="bg-red-700 hover:bg-red-600" />
          </td>
        </tr>
      </tbody>
    </table>    
  </div>
  <UModal v-model="isAddModalOpen">
      <AddTravelForm :closeModal="closeModal" />
  </UModal>
  <UModal v-model="isEditModalOpen">
    <EditTravelForm :travelId="selectedTravelId" :closeModal="closeModal"/>
  </UModal>
</template>
