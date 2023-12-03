<template>
  <div v-if="cartStore.items?.length" class="relative grid grid-cols-none gap-3 lg:grid-cols-3">
    <CartList class="lg:col-span-2" :items="cartStore.items" />

    <CartSummary />
  </div>

  <div v-else class="flex h-full items-center justify-center">
    <Result title="Корзина пуста 😳" />
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>
