<script setup lang="ts">
const authStore = useAuthStore()
const toast = useToast()

const isLoading = ref(true)

const links = [
  {
    label: 'Контактная информация',
    to: '/profile/info',
  },
  {
    label: 'Мои заказы',
    to: '/profile/orders',
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
      const data = await authStore.logout()

      data?.message && toast.add({ title: data.message })
    },
  },
]

const items = Array.from(links, links => [links])

const navigationConfig = {
  size: 'text-base',
}

const dropdownConfig = {
  width: 'w-full',
}

onMounted(() => (isLoading.value = false))
</script>

<template>
  <UVerticalNavigation class="hidden md:block" :links="links" :ui="navigationConfig" />

  <UDropdown
    class="md:hidden"
    :items="items"
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
    :ui="dropdownConfig"
  >
    <UButton color="white" label="Навигация профиля" trailing-icon="i-heroicons-chevron-down-20-solid" block />
  </UDropdown>
</template>
