<script setup lang="ts">
const cartStore = useCartStore()

const isCartValidLoading = cartStore.isLoading
</script>

<template>
  <UContainer class="root-container">
    <div
      class="grid h-full grid-cols-none gap-3 lg:grid-cols-3"
      :class="{ relative: isCartValidLoading }"
    >
      <slot />
    </div>
  </UContainer>
</template>
