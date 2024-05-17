<script setup lang="ts">
import { version } from '../../package.json'

defineOptions({
  inheritAttrs: true,
})

const modalStore = useModalStore()
const authStore = useAuthStore()
const cartStore = useCartStore()
</script>

<template>
  <header class="z-[3] border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
    <UContainer class="flex h-16 items-center justify-between">
      <ULink to="/" class="hover:text-primary p-4.5 text-lg font-medium group" active-class="text-primary [&>sup]:text-black [&>sup]:dark:text-white">
        SHOP-API
        <sup class="text-primary">v{{ version }}</sup>
      </ULink>

      <NavigationLinks class="hidden md:block" />

      <div class="hidden items-center space-x-2 md:flex">
        <QuantityButton icon="i-mdi-cart-outline" variant="ghost" :quantity="cartStore.totalQuantity" to="/cart" />

        <UButton
          v-if="!authStore.isAuthenticated"
          size="md"
          variant="ghost"
          color="gray"
          @click="modalStore.showAuthModal"
        >
          Войти
        </UButton>

        <HeaderProfile v-else />
      </div>

      <GithubButton class="block md:hidden" />
    </UContainer>
  </header>
</template>
