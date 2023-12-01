<template>
  <div class="px-8 py-10">
    <p class="my-2 text-center text-xl font-semibold">{{ title }}</p>
    <p v-if="subTitle" class="text-center text-sm">{{ subTitle }}</p>

    <div class="pt-4"><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subTitle?: string;
}>();
</script>
