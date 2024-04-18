<script setup lang="ts">
const menuItems = [
  [{
    label: 'Travels',
    path: '/travels',
  }],
  [{
    label: 'Bookings',
    path: '/bookings',
  }]
]
</script>
<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
 <div class="flex menuItems-center justify-between p-4">
  <h2 class="text-2xl font-bold">dream travel</h2>
  <UDropdown :items="menuItems" :popper="{ offsetDistance: 1, placement: 'bottom-start' }">
    <UButton color="white" label="Edit" trailing-icon="i-heroicons-chevron-down-20-solid" />
    <template #item="{ item }">
      <NuxtLink :to="item.path">{{ item.label }}</NuxtLink>
    </template>
  </UDropdown>
 </div>
</nav>
</template>