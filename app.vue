<script setup lang="ts">
const cartStore = useCartStore()
const authStore = useAuthStore()
const modalStore = useModalStore()

useHead({ title: 'Главная страница', titleTemplate: (titleChunk) => {
  return `${APP_NAME} - ${titleChunk}`
} })

authStore.isAuthenticated ? await cartStore.fetchCart() : cartStore.initCart()
</script>

<template>
  <NuxtLoadingIndicator />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <AuthModal :opened="modalStore.authModal.opened" @close="modalStore.closeAuthModal" />
  <UNotifications />
</template>

<style>
html,
body {
  @apply h-full;
}

#app {
  @apply relative grid h-screen grid-rows-[auto,_1fr,_auto] overflow-hidden;
}

.root-container {
  @apply pb-20 pt-6 md:pt-10 md:pb-[3.5rem];
}

.product-card:nth-child(2) {
  flex: 1;
}
</style>
