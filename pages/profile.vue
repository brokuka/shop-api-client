<script setup>
definePageMeta({
  middleware: 'auth',
  redirect: '/profile/info',
})

useHead({
  title: 'Профиль',
})
</script>

<template>
  <div class="grid gap-5 md:grid-cols-3">
    <ProfileMenu />

    <section class="md:col-span-2">
      <NuxtPage />
    </section>
  </div>
</template>
