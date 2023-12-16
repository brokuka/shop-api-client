<template>
  <main class="h-full overflow-y-auto">
    <slot />
  </main>
</template>

<script setup lang="ts">
defineProps<{
  containerClass?: string;
}>();
</script>
