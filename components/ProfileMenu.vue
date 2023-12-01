<template>
  <ClientOnly>
    <UVerticalNavigation v-if="isTablet" :links="links" :ui="navigationConfig" />

    <UDropdown v-else :items="items" :popper="{ placement: 'bottom-start', strategy: 'absolute' }" :ui="dropdownConfig">
      <UButton color="white" label="Навигация профиля" trailing-icon="i-heroicons-chevron-down-20-solid" block />
    </UDropdown>
  </ClientOnly>
</template>

<script setup lang="ts">
const authStore = useAuthStore();
const toast = useToast();
const windowSize = useWindowSize();

const isTablet = computed(() => windowSize.width.value >= 768);

const links = [
  {
    label: 'Контактная информация',
    to: '/profile/info',
  },
  {
    label: 'Мои заказы',
    // to: '/profile/orders',
    disabled: true,
  },
  {
    label: 'Избранное',
    // to: '/profile/favorites',
    disabled: true,
  },
  {
    label: 'Выйти из аккаунта',
    icon: 'i-mdi-location-exit',
    click: async () => {
      const data = await authStore.logout();

      toast.add({ title: data?.message });
    },
  },
];

const items = Array.from(links, (links) => [links]);

const navigationConfig = {
  size: 'text-base',
};

const dropdownConfig = {
  width: 'w-full',
};
</script>
