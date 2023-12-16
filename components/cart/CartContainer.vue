<template>
  <UContainer class="py-6 md:py-10">
    <div
      class="grid h-full grid-cols-none gap-3 lg:grid-cols-3"
      :class="{ 'relative grid grid-cols-none gap-3 lg:grid-cols-3': isCartValidLoading }"
    >
      <slot />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const cartStore = useCartStore();

const isCartValidLoading = cartStore.isLoading && cartStore.items;
</script>
