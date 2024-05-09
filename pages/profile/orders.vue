<script setup lang="ts">
import type { ApiResponse, Order } from '~/utils/types'

const { data: orders } = await useAuthFetch<ApiResponse<Order[]>>('/order')

useHead({
  title: 'Мои заказы',
})
</script>

<template>
  <ProfileSectionHeader>Мои заказы</ProfileSectionHeader>

  <OrderList v-if="orders?.data" :orders="orders.data" />
  <div v-else>
    {{ orders?.message }}
  </div>
</template>
