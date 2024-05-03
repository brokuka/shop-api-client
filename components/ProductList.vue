<script setup lang="ts">
import type { Product } from '~/utils/types'

defineProps<{
  items: Product[]
}>()
</script>

<template>
  <div class="grid grid-cols-2 gap-x-2 gap-y-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <ProductCard
      v-for="item in items"
      :key="item.product_id"
      :category="item.category"
      :description="item.description"
      :price="item.price"
      :product_id="item.product_id"
      :image="item.image"
      :title="item.title"
      :slug="item.slug"
    />
  </div>
</template>
