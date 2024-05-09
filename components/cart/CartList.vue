<script setup lang="ts">
import type { CartItem } from '~/stores/useCartStore'

defineProps<{
  items: Nullable<CartItem[]>
}>()
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="grid gap-y-3">
      <CartCard
        v-for="item in items"
        :key="item.product_id"
        :category="item.category"
        :description="item.description"
        :price="item.price"
        :product_id="item.product_id"
        :image="item.image"
        :title="item.title"
        :quantity="item.quantity"
        :slug="item.slug"
      />
    </div>
  </div>
</template>
