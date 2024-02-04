<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <UButton @click="userStore.fetchUser">
    Запросить юзера
  </UButton>
</template>
