<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <AuthModal :opened="modalStore.authModal.opened" @close="modalStore.closeAuthModal" />
  <UNotifications />
</template>

<script setup lang="ts">
const modalStore = useModalStore();
</script>

<style>
.product-card:nth-child(2) {
  flex: 1;
}
</style>
