<script setup lang="ts">
import type { ApiResponse, Product } from '~/utils/types'

const nuxtApp = useNuxtApp()

useHead({
  title: 'Продукты',
})

const { data: products } = await useDefaultFetch<ApiResponse<Product[]>>('/product', {
  getCachedData(key) {
    return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
  },
})

if (!products.value?.data) {
  throw showError({
    statusCode: 404,
  })
}
</script>

<template>
  <ProductList v-if="products?.data" :items="products.data" />
</template>
