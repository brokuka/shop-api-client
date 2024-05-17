<script setup lang="ts">
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

const LINK_BASE_CLASSES = tw('text-sm font-medium md:px-2.5 md:py-1.5 md:hover:bg-primary-50 md:dark:hover:bg-primary-950 rounded-md')
</script>

<template>
  <ULink :class="[LINK_BASE_CLASSES, wrapperClasses]" :to="to" class="relative" active-class="text-primary" aria-label="Корзина">
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
