<template>
  <UButton class="relative" :icon="icon" :variant="variant">
    <span
      v-if="count"
      class="absolute -top-1 text-xs"
      :class="{ '-right-2.5': isCountReachedMaximum, '-right-0.5': !isCountReachedMaximum }"
    >
      {{ isCountReachedMaximum ? '99+' : count }}
    </span>
  </UButton>
</template>

<script setup lang="ts">
import type { Button } from '@nuxt/ui/dist/runtime/types';

const props = defineProps<Button & { count?: number }>();

const isCountReachedMaximum = computed(() => props.count && props.count > 99);
</script>
