<script setup lang="ts">
import type { ApiResponse, Product } from '~/utils/types'

useHead({
  title: 'Продукты',
})

const { data: products } = await useDefaultFetch<ApiResponse<Product[]>>('/product')

if (!products.value?.data) {
  throw showError({
    statusCode: 404,
  })
}
</script>

<template>
  <ProductList v-if="products?.data" :items="products.data" />
</template>
