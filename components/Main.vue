<template>
  <main class="h-full overflow-y-auto">
    <UContainer class="py-6 md:py-10" :class="containerClass">
      <slot />
    </UContainer>
  </main>
</template>

<script setup lang="ts">
defineProps<{
  containerClass?: string;
}>();
</script>
