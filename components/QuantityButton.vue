<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

defineOptions({
  inheritAttrs: true,
})

const props = defineProps<{
  variant: ButtonVariant
  quantity?: number
  icon?: string
  label?: string
  to?: string
  inset?: boolean
  wrapperClasses?: string
}>()

const QUANTITY_LIMIT = 99

const slot = useSlots()

const reachLimit = computed(() => {
  if (!props.quantity)
    return

  return props.quantity > QUANTITY_LIMIT ? `${QUANTITY_LIMIT}+` : props.quantity
})

const classes
  = 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 lg:hover:bg-primary-50 disabled:bg-transparent lg:dark:hover:bg-primary-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset lg:focus-visible:ring-primary-500 lg:dark:focus-visible:ring-primary-400 inline-flex items-center'
</script>

<template>
  <ULink :class="twMerge(classes, wrapperClasses)" :to="to" class="relative" active-class="text-primary">
    <ClientOnly>
      <template #fallback>
        <UChip :show="false" size="2xl" :inset="inset" class="absolute right-0 top-0.5" />
      </template>

      <template #default>
        <UChip
          :show="Boolean(quantity)"
          :text="reachLimit"
          size="2xl"
          :inset="inset"
          class="absolute right-0 top-0.5"
        />
      </template>
    </ClientOnly>

    <Icon v-if="icon" :name="icon" size="20" />

    <slot v-if="slot.default" />

    <template v-else>
      {{ label }}
    </template>
  </ULink>
</template>
