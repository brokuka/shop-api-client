<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>

  <AuthModal :opened="modalStore.authModal.opened" @close="modalStore.closeAuthModal" />
  <UNotifications />
</template>

<script setup lang="ts">
const modalStore = useModalStore();
const cartStore = useCartStore();

cartStore.initCart();
</script>

<style>
html,
body {
  @apply h-full;
}

#app {
  @apply relative grid h-screen grid-rows-[auto,_1fr,_auto] overflow-hidden;
}

.root-container {
  @apply pb-20 pt-6 md:py-10;
}

.product-card:nth-child(2) {
  flex: 1;
}
</style>
