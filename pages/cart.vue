<template>
  <div
    class="grid h-full grid-cols-none gap-3 lg:grid-cols-3"
    :class="{ 'relative grid grid-cols-none gap-3 lg:grid-cols-3': isCartValidLoading }"
  >
    <ClientOnly>
      <template #fallback>
        <div class="space-y-3 lg:col-span-2">
          <CartCardSkeleton v-for="item in createArray(4)" :key="item" />
        </div>

        <CartSummarySkeleton />
      </template>

      <template v-if="cartStore.items">
        <CartList class="lg:col-span-2" :items="cartStore.items" />
        <CartSummary />
      </template>

      <div v-else class="col-span-3 flex h-full items-center justify-center">
        <Result title="Корзина пуста 😳" />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();

const isCartValidLoading = cartStore.isLoading || cartStore.items?.length;
</script>
