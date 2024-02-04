<script setup lang="ts">
defineProps<{
  label?: string
  to?: string
  quantity?: number
  clientOnly?: boolean
}>()

const slot = useSlots()
</script>

<template>
  <QuantityButton wrapper-classes="p-4.5" :quantity="quantity" :label="label" variant="ghost" :to="to" inset>
    <template v-if="slot.default">
      <slot />
    </template>

    <template v-else>
      {{ label }}
    </template>
  </QuantityButton>
</template>
