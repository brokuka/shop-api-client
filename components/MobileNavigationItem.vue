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

<script setup lang="ts">
const slot = useSlots();

defineProps<{
  label?: string;
  to?: string;
  quantity?: number;
  clientOnly?: boolean;
}>();
</script>
