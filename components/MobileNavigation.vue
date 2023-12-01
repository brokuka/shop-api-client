<template>
  <div
    class="fixed bottom-0 left-0 right-0 z-[2] -mb-px border-t border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 md:hidden"
  >
    <div class="flex items-center justify-between">
      <MobileNavigationItem
        v-for="item in NAVIGATION"
        :key="item.id"
        :to="item.href"
        :label="item.label"
        :text="item.text"
      />

      <MobileNavigationItem :to="navigateUserButton" @click="handleUserButton">
        <span v-if="!authStore.isAuthenticated">Вход</span>
        <span v-else>Профиль</span>
      </MobileNavigationItem>
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const modalStore = useModalStore();
const cartStore = useCartStore();

const handleUserButton = () => {
  if (!authStore.isAuthenticated) {
    return modalStore.showAuthModal();
  }
};

const navigateUserButton = computed(() => (authStore.isAuthenticated ? '/profile' : undefined));

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
    text: cartStore.totalQuantity,
  },
]);
</script>
