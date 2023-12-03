<template>
  <!-- :to="`/order/${order.order_id}`" -->
  <NuxtLink class="flex space-x-3.5" :to="`/profile/order/${order.order_id}`">
    <Image :image-src="firstProductImage" :width="80" :height="80" title="" />

    <div class="flex-1">
      <h4 class="text-primary font-bold lg:text-xl">Оплачен</h4>

      <div class="space-x-2 text-sm text-gray-500">
        <span>№{{ order.order_id }}</span>
        <span>{{ dayjs(order.date).format('L LT') }}</span>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <span class="text-sm font-semibold lg:text-base">{{ order.total_price }}$</span>
      <span class="text-xs text-gray-400">({{ order.total_quantity }}шт)</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Order } from '~/utils/types';

const dayjs = useDayjs();

const props = defineProps<{
  order: Order;
}>();

// Временно используем картинку первого продукта
const firstProductImage = props.order.items[0].product.image;

console.log(firstProductImage);
</script>
