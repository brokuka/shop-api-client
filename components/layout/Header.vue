<script setup lang="ts">
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
      <ULink
        to="/" class="flex gap-1 hover:text-primary p-4.5 text-lg font-medium group items-center justify-center"
        active-class="text-primary"
      >
        <span class="">SHOP-API</span>

        <VersionSelect class="hidden lg:block" placement="bottom" />
      </ULink>

      <NavigationLinks class="hidden md:block" />

      <div class="hidden items-center space-x-2 md:flex">
        <QuantityButton icon="i-mdi-cart-outline" variant="ghost" :quantity="cartStore.totalQuantity" to="/cart" />

        <UButton
          v-if="!authStore.isAuthenticated" size="md" variant="ghost" color="gray"
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
