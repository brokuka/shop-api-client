<script setup lang="ts">
import type { ApiErrorResponse, Order } from '~/utils/types'

const route = useRoute()
const userStore = useUserStore()

const { orderId } = route.params

const { error } = await useAuthFetch<Order, ApiErrorResponse>(`/order/${orderId}`, {
  method: 'POST',
  body: {
    user_id: userStore.user?.user_id,
  },
})

if (error.value) {
  throw showError({
    statusCode: 404,
  })
}
</script>

<template>
  <ProfileSectionHeader>О заказе №{{ orderId }}</ProfileSectionHeader>

  <EmptyResult />
</template>
