<script setup lang="ts">
const props = defineProps<{
  value: number
}>()
const emit = defineEmits<{
  (e: 'change', value: number): void
  (e: 'increase'): void
  (e: 'decrease'): void
}>()
const cartStore = useCartStore()
const windowSize = useWindowSize()

const isDecreaseButtonDisabled = computed(() => props.value <= 1)
const isTablet = computed(() => windowSize.width.value > SCREEN_SIZES.MD)

function onChange(amount: string) {
  if (!amount.length)
    return

  return emit('change', Number(amount))
}

function onBlur(e: Event) {
  const target = e.target as HTMLInputElement

  if (!target.value)
    target.value = `${props.value}`
}
</script>

<template>
  <div class="flex space-x-2">
    <UTooltip
      text="Уменьшить"
      :popper="{ arrow: true }"
      :prevent="cartStore.isLoading || isDecreaseButtonDisabled || !isTablet"
    >
      <UButton
        icon="i-mdi-minus"
        color="red"
        variant="soft"
        :disabled="isDecreaseButtonDisabled"
        @click="emit('decrease')"
      />
    </UTooltip>

    <UInput
      v-maska
      :model-value="!value ? 1 : value"
      data-maska-tokens="A:[1-9]:multiple|B:[0-9]:multiple"
      data-maska="AB"
      class="max-w-[70px]"
      @blur="onBlur"
      @change="onChange"
    />
    <!-- @input="onChange" -->

    <UTooltip text="Увеличить" :popper="{ arrow: true }" :prevent="cartStore.isLoading || !isTablet">
      <UButton icon="i-mdi-plus" variant="soft" @click="emit('increase')" />
    </UTooltip>
  </div>
</template>
