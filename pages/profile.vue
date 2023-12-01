<template>
  <div class="grid gap-5 md:grid-cols-3">
    <ProfileMenu />

    <section class="md:col-span-2">
      <NuxtPage />
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
  redirect: '/profile/info',
});
</script>
