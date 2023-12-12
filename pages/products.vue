<template>
  <ProductList v-if="products?.data" :items="products.data" />
</template>

<script setup lang="ts">
import type { ApiResponse } from '~/utils/types';
import type { Product } from '~/utils/types';

const { data: products } = await useDefaultFetch<ApiResponse<Product[]>>('/product');

if (!products.value?.data) {
  throw showError({
    statusCode: 404,
  });
}
</script>
