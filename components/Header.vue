<template>
  <header class="bg-background/75 z-50 -mb-px border-b border-gray-200 backdrop-blur dark:border-gray-800">
    <UContainer class="flex h-16 items-center justify-between">
      <ULink to="/" class="hover:text-primary p-4.5 text-lg font-medium" active-class="text-primary">SHOP-API</ULink>

      <NavigationLinks />

      <div class="flex items-center space-x-2">
        <ChipButton
          icon="i-mdi-cart-outline"
          variant="ghost"
          :count="cartStore.totalQuantity"
          @click="navigateTo('/cart')"
        />

        <UButton
          v-if="!authStore.isAuthenticated"
          size="md"
          variant="ghost"
          color="gray"
          @click="modalStore.showAuthModal"
          >Войти</UButton
        >

        <HeaderProfile v-else />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const modalStore = useModalStore();
const authStore = useAuthStore();
const cartStore = useCartStore();

defineOptions({
  inheritAttrs: true,
});
</script>
