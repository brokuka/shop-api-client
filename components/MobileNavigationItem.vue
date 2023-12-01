<template>
  <ULink v-if="!text" class="inline-flex p-4 text-sm/6 font-semibold" :to="to" active-class="text-primary">
    <template v-if="slot.default">
      <slot />
    </template>

    <template v-else>
      {{ label }}
    </template>
  </ULink>

  <QuantityButton v-else wrapper-classes="p-4.5" :quantity="text" :label="label" variant="ghost" :to="to" inset />
</template>

<script setup lang="ts">
const slot = useSlots();

defineProps<{
  label?: string;
  to?: string;
  text?: number;
}>();
</script>
