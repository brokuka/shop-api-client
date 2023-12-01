<template>
  <div class="flex">
    <span
      class="relative inline-block w-full after:absolute after:bottom-1.5 after:left-0 after:inline-block after:w-full after:border-b after:border-dashed after:border-gray-400 after:content-['']"
    >
      <span class="relative z-[1] bg-white pr-1.5 font-medium dark:bg-gray-900"> {{ label }}</span>
    </span>

    <span class="pl-1.5 font-medium">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number;
}>();
</script>
