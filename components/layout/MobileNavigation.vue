<script setup lang="ts">
const authStore = useAuthStore()
const modalStore = useModalStore()
const cartStore = useCartStore()

function handleUserButton() {
  if (!authStore.isAuthenticated)
    return modalStore.showAuthModal()
}

const navigateUserButton = computed(() => (authStore.isAuthenticated ? '/profile' : undefined))

const NAVIGATION = computed(() => [
  {
    id: 1,
    label: 'Продукты',
    href: '/products',
  },
  {
    id: 2,
    label: 'Корзина',
    href: '/cart',
    quantity: cartStore.totalQuantity,
  },
])
</script>

<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-[2] border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-black md:hidden"
  >
    <div class="flex items-center justify-between">
      <VersionSelect class="pl-3" placement="top" />

      <QuantityButton
        v-for="item in NAVIGATION" :key="item.id" :to="item.href" :label="item.label"
        :quantity="item.quantity" variant="ghost" wrapper-classes="p-4.5" inset
      />

      <QuantityButton variant="ghost" wrapper-classes="p-4.5" inset :to="navigateUserButton" @click="handleUserButton">
        <span v-if="!authStore.isAuthenticated">Вход</span>
        <span v-else>Профиль</span>
      </QuantityButton>
    </div>
  </div>
</template>
