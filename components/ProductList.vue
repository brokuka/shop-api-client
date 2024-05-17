<script setup lang="ts">
import type { Product } from '~/utils/types'

defineProps<{
  items: Product[]
}>()

const localStorage = useLocalStorage<number[]>('favorite_entities', [], { writeDefaults: false })

const isFavorited = (product_id: number) => localStorage.value.includes(product_id)

function onFavorite(product_id: number) {
  if (isFavorited(product_id)) {
    localStorage.value = localStorage.value.filter(id => product_id !== id)
    return
  }

  localStorage.value.push(product_id)
}
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
      :favorited="isFavorited(item.product_id)"
      @favorite="onFavorite(item.product_id)"
    />
  </div>
</template>
