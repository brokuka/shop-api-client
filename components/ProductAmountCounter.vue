<template>
  <div class="flex space-x-2">
    <UTooltip text="Уменьшить" :popper="{ arrow: true }" :prevent="isDecreaseButtonDisabled">
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
      data-maska-tokens="A:[0-9]:multiple"
      data-maska="A"
      class="max-w-[70px]"
      @blur="onBlur"
      @change="onChange"
    />

    <UTooltip text="Увеличить" :popper="{ arrow: true }">
      <UButton icon="i-mdi-plus" variant="soft" @click="emit('increase')" />
    </UTooltip>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();

const emit = defineEmits<{
  (e: 'change', value: number): void;
  (e: 'increase'): void;
  (e: 'decrease'): void;
}>();

const isDecreaseButtonDisabled = computed(() => props.value <= 1);

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.value.length) return;

  return emit('change', Number(target.value));
};

const onBlur = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (!target.value) {
    target.value = `${props.value}`;
  }
};
</script>
