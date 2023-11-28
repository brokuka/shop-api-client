<template>
  <div class="flex h-fit space-x-4 rounded-lg bg-white p-4 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
    <Image :image-src="image" :title="title" :width="110" :height="110" container-class="shrink-0" />

    <div class="flex flex-col space-y-5">
      <div class="flex flex-1 flex-col space-y-2">
        <div class="flex justify-between space-x-4">
          <span class="mr-4 text-lg font-medium">{{ title }}</span>

          <UBadge class="h-fit whitespace-nowrap" variant="solid" color="gray">{{ category }}</UBadge>
        </div>

        <p v-if="description" class="text-sm">{{ description }}</p>
      </div>

      <div class="flex">
        <ProductAmountCounter
          :value="quantity"
          @change="onAmountChange"
          @increase="onAmountIncrease"
          @decrease="onAmountDecrease"
        />

        <UTooltip text="Удалить с корзины" :popper="{ arrow: true }" :ui="{ wrapper: 'ml-auto' }">
          <UButton
            icon="i-mdi-delete-outline"
            color="red"
            variant="soft"
            @click="cartStore.removeFromCart(product_id)"
          />
        </UTooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/stores/useCartStore';

const props = defineProps<CartItem>();

const { quantity } = toRefs(props);

const cartStore = useCartStore();

const onAmountChange = (value: number) => {
  cartStore.changeProductCount(props.product_id, value);
};

const onAmountIncrease = () => {
  cartStore.changeProductCount(props.product_id, quantity.value + 1);
};

const onAmountDecrease = () => {
  cartStore.changeProductCount(props.product_id, quantity.value - 1);
};
</script>
