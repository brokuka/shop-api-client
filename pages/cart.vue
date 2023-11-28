<template>
  <div v-if="cartStore.items?.length" class="relative grid grid-cols-3 gap-x-3">
    <CartList class="col-span-2" :items="cartStore.items" />

    <CartSummary />
  </div>

  <div v-else>Корзина пуста ;(</div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
</script>
