<template>
  <ULink :class="twMerge(classes, wrapperClasses)" :to="to" class="relative" active-class="text-primary">
    <ClientOnly>
      <template #fallback>
        <UChip :show="false" class="hidden" />
      </template>

      <UChip :show="isQuantityExist" :text="reachLimit" size="2xl" :inset="inset" class="absolute right-0 top-0.5" />
    </ClientOnly>

    <Icon v-if="icon" :name="icon" size="20" />

    <slot v-if="slot.default" />

    <template v-else>
      {{ label }}
    </template>
  </ULink>
</template>

<script lang="ts">
const QUANTITY_LIMIT = 99;
</script>

<script setup lang="ts">
import type { ButtonVariant } from '@nuxt/ui/dist/runtime/types';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  variant: ButtonVariant;
  quantity?: number;
  icon?: string;
  label?: string;
  to?: string;
  inset?: boolean;
  wrapperClasses?: string;
}>();

defineOptions({
  inheritAttrs: true,
});

const slot = useSlots();

const isQuantityExist = computed(() => Boolean(props.quantity));

const reachLimit = computed(() => {
  if (props.quantity && props.quantity > QUANTITY_LIMIT) {
    return `${QUANTITY_LIMIT}+`;
  }

  return props.quantity;
});

const classes =
  'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 lg:hover:bg-primary-50 disabled:bg-transparent lg:dark:hover:bg-primary-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset lg:focus-visible:ring-primary-500 lg:dark:focus-visible:ring-primary-400 inline-flex items-center';
</script>
