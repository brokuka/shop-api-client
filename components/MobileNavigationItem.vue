<template>
  <component :is="isLinkComponent ? NuxtLink : 'button'" class="p-4" :to="to">
    <template v-if="slot.default">
      <slot />
    </template>

    <span v-else class="">{{ label }}</span>
  </component>
</template>

<script setup lang="ts">
const slot = useSlots();

const props = defineProps<{
  label?: string;
  to?: string;
}>();

const isLinkComponent = computed(() => Boolean(props.to));
const NuxtLink = resolveComponent('NuxtLink');
</script>
