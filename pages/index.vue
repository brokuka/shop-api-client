<template>
  <div class="flex h-full flex-grow flex-col items-center justify-center space-y-2">
    <h1 class="text-5xl font-medium">Привет!</h1>

    <div class="inline-flex items-center text-xl">
      Чтобы полноценно пользоваться приложением нужно пройти
      <UButton variant="link" :padded="false" size="xl" class="ml-2 h-full" @click="modalStore.showAuthModal"
        >авторизацию.</UButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const modalStore = useModalStore();
</script>
