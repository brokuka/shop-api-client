<template>
  <ClientOnly>
    <template #fallback>
      <CartContainer>
        <div class="space-y-3 lg:col-span-2">
          <CartCardSkeleton v-for="item in createArray(4)" :key="item" />
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

definePageMeta({
  layout: 'without-container',
});
</script>
