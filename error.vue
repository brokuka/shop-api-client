<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

defineProps<{
  error: NuxtError
}>()

const handleError = () => reloadNuxtApp({ path: '/', ttl: 5000 })
</script>

<template>
  <Result v-if="error.statusCode === 404" class="w-full text-center" title="Ошибка 404: Страница не найдена">
    <UButton variant="outline" @click="handleError">
      На главную
    </UButton>
  </Result>
</template>
