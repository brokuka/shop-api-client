<script setup lang="ts">
const cartStore = useCartStore()
const authStore = useAuthStore()

const SKELETON_ITEMS_COUNT = 4

definePageMeta({
  layout: 'without-container',
})

authStore.isAuthenticated ? await cartStore.fetchCart() : cartStore.initCart()
</script>

<template>
  <ClientOnly>
    <template #fallback>
      <CartContainer>
        <div class="space-y-3 lg:col-span-2">
          <CartCardSkeleton v-for="order in SKELETON_ITEMS_COUNT" :key="order" />
        </div>

        <CartSummarySkeleton />
      </CartContainer>
    </template>

    <CartContainer
      v-if="cartStore.items?.length" :class="{
        'opacity-50 pointer-events-none': cartStore.isLoading,
      }"
    >
      <CartList class="lg:col-span-2" :items="cartStore.items" />
      <CartSummary />
    </CartContainer>

    <Result v-else title="Корзина пуста 😳" class="grid h-full place-items-center">
      <UButton to="/products">
        Перейти к каталогу
      </UButton>
    </Result>
  </ClientOnly>

  <!-- <ClientOnly>
    <CartContainer v-if="cartStore.isLoading">
      <div class="space-y-3 lg:col-span-2">
        <CartCardSkeleton v-for="order in SKELETON_ITEMS_COUNT" :key="order" />
      </div>

      <CartSummarySkeleton />
    </CartContainer>

    <template v-else>
      <CartContainer v-if="cartStore.items?.length">
        <CartList class="lg:col-span-2" :items="cartStore.items" />
        <CartSummary />
      </CartContainer>

      <Result v-else title="Корзина пуста 😳" class="grid h-full place-items-center">
        <UButton to="/products">
          Перейти к каталогу
        </UButton>
      </Result>
    </template>
  </ClientOnly> -->
</template>
