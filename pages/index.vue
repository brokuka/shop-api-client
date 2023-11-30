<template>
  <div class="flex h-full flex-grow flex-col items-center justify-center space-y-2">
    <h1 class="text-5xl font-medium">Привет!</h1>

    <div class="flex flex-col items-center text-center text-xl md:flex-row md:text-start">
      <span>Чтобы полноценно пользоваться приложением нужно пройти</span>
      <UButton variant="link" :padded="false" size="xl" class="md:ml-2 md:h-full" @click="modalStore.showAuthModal"
        >авторизацию.</UButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const modalStore = useModalStore();
</script>
