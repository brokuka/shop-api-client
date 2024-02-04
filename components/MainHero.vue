<script setup lang="ts">
const modalStore = useModalStore()
const authStore = useAuthStore()
</script>

<template>
  <div class="flex h-full flex-grow flex-col items-center justify-center space-y-2">
    <template v-if="!authStore.isAuthenticated">
      <h1 class="text-5xl font-medium">
        Привет!
      </h1>

      <div class="flex flex-col items-center text-center text-xl md:flex-row md:text-start">
        <span>Чтобы полноценно пользоваться приложением нужно пройти</span>
        <UButton variant="link" :padded="false" size="xl" class="md:ml-2 md:h-full" @click="modalStore.showAuthModal">
          авторизацию.
        </UButton>
      </div>
    </template>

    <template v-else>
      <h1 class="text-5xl font-medium">
        SHOP API
      </h1>

      <div class="flex flex-col items-center text-center text-xl md:flex-row md:text-start">
        <span>Приложение находиться на активной стадии развития, если заметите
          <UBadge size="lg" variant="soft" color="red">баг\ошибки</UBadge> можете смело писать
          <NuxtLink
            to="https://github.com/brokuka/shop-api-client/issues"
            class="text-primary underline decoration-dotted" target="_blank"
          >ишью</NuxtLink>
        </span>
      </div>
    </template>
  </div>
</template>
