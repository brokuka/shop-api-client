<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()

const slot = useSlots()
</script>

<template>
  <div>
    <div class="px-8 py-10 flex flex-col gap-4 items-center">
      <p class="my-2 text-center text-xl font-semibold">
        {{ title }}
      </p>

      <p v-if="subTitle" class="text-center text-sm">
        {{ subTitle }}
      </p>

      <div v-if="slot.default">
        <slot />
      </div>
    </div>
  </div>
</template>
