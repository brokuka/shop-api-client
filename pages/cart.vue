<template>
  <ClientOnly>
    <template #fallback>
      <CartContainer>
        <div class="space-y-3 lg:col-span-2">
          <CartCardSkeleton v-for="item in createArray(SKELETON_ITEMS_COUNT)" :key="item" />
        </div>

        <CartSummarySkeleton />
      </CartContainer>
    </template>

    <CartContainer v-if="cartStore.items">
      <CartList class="lg:col-span-2" :items="cartStore.items" />
      <CartSummary />
    </CartContainer>

    <Result v-else title="Корзина пуста 😳" class="grid h-full place-items-center" />
  </ClientOnly>
</template>

<script setup lang="ts">
const cartStore = useCartStore();

const SKELETON_ITEMS_COUNT = 4;

definePageMeta({
  layout: 'without-container',
});
</script>
