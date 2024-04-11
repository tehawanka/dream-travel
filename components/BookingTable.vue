<script setup lang="ts">
import { useBookingStore } from '~/store/bookingStore';
import { useTravelStore } from '~/store/travelsStore';
import BookingWizard from '~/components/BookingWizard/BookingWizard.vue';

const store = useBookingStore();
const {getTravelName} = useTravelStore();
const bookings = store.bookings;
// deleteBooking: store.deleteBooking;
const isOpen = ref(false);
const closeModal = () => {
  isOpen.value = false;
};
</script>
<template>
  <div class="container mx-auto">
    <div class="flex justify-end">
      <UButton label="Book travel" @click="isOpen = true" />
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">id</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Travel Name</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Customer notes</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Type</th>
          <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="booking in bookings" :key="booking.id">
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ booking.id }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ getTravelName(booking.travelId) }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ booking.customersInfo.name }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ booking.paymentType }}</td>
          <td class="px-6 py-4 border-b border-gray-300 whitespace-nowrap">{{ booking.notes }}</td>
        </tr>
      </tbody>
    </table>
    <UModal v-model="isOpen">
      <BookingWizard :closeModal="closeModal" />
    </UModal>
  </div>
</template>