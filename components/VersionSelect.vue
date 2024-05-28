<script setup lang="ts">
defineProps<{
  placement?: 'top' | 'bottom'
}>()

const { versions, currentVersion } = useSelectVersion()
</script>

<template>
  <UDropdown
    class="w-full" :items="[versions]" color="gray" mode="hover" :ui="{ width: 'w-full' }"
    :popper="{ strategy: 'absolute', placement }"
  >
    <UButton color="gray" class="w-full">
      <span class="text-gray-900 dark:text-white">{{ currentVersion.label }}</span>

      <span class="text-gray-400 dark:text-gray-500">{{ currentVersion.suffix }}</span>

      <UIcon
        name="i-heroicons-chevron-down-20-solid"
        class="w-5 h-5 text-gray-400 dark:text-gray-500 ml-auto -mr-1"
      />
    </UButton>

    <template #item="{ item }">
      <UIcon v-if="item.icon" :name="item.icon" class="w-4 h-4 flex-shrink-0 text-gray-600 dark:text-gray-300" />

      <span>{{ item.label }}</span>

      <span class="truncate text-gray-400 dark:text-gray-500">{{ item.suffix }}</span>
    </template>
  </UDropdown>
</template>
