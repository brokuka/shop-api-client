<template>
  <div
    class="flex h-fit flex-col space-y-5 rounded-lg bg-white p-4 ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 md:space-x-4"
  >
    <div class="flex space-x-2">
      <div class="w-full max-w-[80px] shrink-0 md:max-w-[126px]">
        <Image
          :image-src="image"
          :title="title"
          :width="80"
          :height="80"
          container-class="w-full aspect-w-[80] aspect-h-[80]"
          class="object-contain"
        />
      </div>

      <div class="flex flex-1 flex-col space-y-5">
        <div class="flex flex-1 flex-col space-y-2">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:space-x-4">
            <NuxtLink :to="`/product/${product_id}`">
              <span class="lg:hover:text-primary active:text-primary line-clamp-4 text-base font-medium md:text-lg">{{
                title
              }}</span>
            </NuxtLink>

            <UBadge class="hidden h-fit w-fit whitespace-nowrap sm:block" variant="solid" color="gray">{{
              category
            }}</UBadge>
          </div>

          <p v-if="description" class="hidden text-sm sm:block">{{ description }}</p>
        </div>

        <div class="hidden sm:flex">
          <ProductAmountCounter
            :value="quantity"
            @change="onAmountChange"
            @increase="onAmountIncrease"
            @decrease="onAmountDecrease"
          />

          <UTooltip
            text="Удалить с корзины"
            :popper="{ arrow: true }"
            :ui="{ wrapper: 'ml-auto' }"
            :prevent="!isTablet"
          >
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

    <div class="flex sm:hidden">
      <UBadge class="whitespace-nowrap" variant="solid" color="gray">{{ category }}</UBadge>
    </div>

    <div v-if="description" class="block max-h-[100px] overflow-y-auto text-sm sm:hidden">
      <p class="text-sm">{{ description }}</p>
    </div>

    <div class="flex sm:hidden">
      <ProductAmountCounter
        :value="quantity"
        @change="onAmountChange"
        @increase="onAmountIncrease"
        @decrease="onAmountDecrease"
      />

      <UTooltip text="Удалить с корзины" :ui="{ wrapper: 'ml-auto' }" :prevent="!isTablet">
        <UButton icon="i-mdi-delete-outline" color="red" variant="soft" @click="cartStore.removeFromCart(product_id)" />
      </UTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CartItem } from '~/stores/useCartStore';

const cartStore = useCartStore();
const windowSize = useWindowSize();

const props = defineProps<CartItem>();

const { quantity } = toRefs(props);

const isTablet = computed(() => windowSize.width.value > 768);

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
