<script setup lang="ts">


const emit = defineEmits(["selectPaymentType"]);


const payments = [
 [{
    label: 'Credit transfer',
    click: () => {
      emit('selectPaymentType', 'credit-transfer');
    }
  }], [{
    label: 'Paypal',
    click: () => {
      emit('selectPaymentType', 'paypal');
    }
  }], [{
    label: 'Revolut',
    click: () => {
      emit('selectPaymentType', 'revolut');
    }
  }]
]
</script>

<template>
  <UDropdown :items="payments" mode="hover" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Payments" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>
</template>

<!-- Credit transfer, Paypal, Revolut)  -->