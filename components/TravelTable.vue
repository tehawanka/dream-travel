<script>
import { reactive, computed } from 'vue';
import { useTravelStore } from '@/store/travelsStore';
import EditTravelForm from './EditTravelForm.vue';
import AddTravelForm from './AddTravelForm.vue';

export default {
  setup() {
    const store = useTravelStore();
    const deleteTravel = (id) => {
      store.deleteTravel(id);
    };
    const filter = reactive({
      name: '',
      date: ''
    });

    const filteredTravels = computed(() => {
      return store.travels.filter(travel => {
        const nameMatch = travel.name.toLowerCase().includes(filter.name.toLowerCase());
        const dateMatch = filter.date ? travel.departureDates === filter.date : true;
        return nameMatch && dateMatch;
      });
    });
    console.log("filteredTravels: ", filteredTravels);
    return {
      travels: filteredTravels,
      filter,
      deleteTravel
    };
  }
};
</script>
<template>
  <div class="container mx-auto">
    <!-- <AddTravelForm /> -->
    <EditTravelForm :travelId="1"/>
    <input v-model="filter.name" type="text" placeholder="Search by name" class="w-full p-2 border border-gray-300 rounded-lg mb-4">
    <input v-model="filter.date" type="date" class="w-full p-2 border border-gray-300 rounded-lg mb-4">
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Departure Dates</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Picture</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Description</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="travel in travels" :key="travel.id">
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.name }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.departureDates }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap"><img :src="travel.picture" alt="Travel Picture" class="h-16 w-16 object-cover"></td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.description }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.price }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ travel.rating }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">
            <button @click="() => deleteTravel(travel.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>