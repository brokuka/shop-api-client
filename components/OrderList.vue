<script setup lang="ts">
import type { Order } from '~/utils/types'

defineProps<{
  orders: Order[]
}>()
</script>

<template>
  <div class="grid gap-5">
    <OrderCard v-for="order in orders" :key="order.order_id" :order="order" />
  </div>
</template>
