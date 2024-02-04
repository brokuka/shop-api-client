<script setup lang="ts">
const authStore = useAuthStore()
const toast = useToast()

const ITEMS = [
  [
    {
      label: 'Профиль',
      to: '/profile',
    },
  ],
  [
    {
      label: 'Выйти',
      icon: 'i-mdi-location-exit',
      slot: 'exit',
      click: async () => {
        const data = await authStore.logout()

        data?.message && toast.add({ title: data.message })
      },
    },
  ],
]
</script>

<template>
  <UDropdown :items="ITEMS" :ui="{ wrapper: 'h-full' }" :popper="{ arrow: true }">
    <UButton color="gray" trailing-icon="i-heroicons-chevron-down-20-solid" variant="ghost">
      <UAvatar size="sm" icon="i-mdi-account" />
    </UButton>
  </UDropdown>
</template>
