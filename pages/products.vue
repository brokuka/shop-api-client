<template>
  <ProductList v-if="data" :items="data" />
</template>

<script setup lang="ts">
import type { Product } from '~/utils/types';

const { data } = await useDefaultFetch<Product[]>('/product');

if (!data.value) {
  throw showError({
    statusCode: 404,
  });
}
</script>
