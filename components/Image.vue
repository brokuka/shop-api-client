<template>
  <div :class="[{ 'bg-gray-200': !isReady && !error, 'bg-transparent': isReady }, containerClass]">
    <img
      v-bind="attrs"
      class="transition-opacity"
      :class="[{ 'opacity-0': !isReady && !error, 'opacity-100': isReady }, attrs.class]"
      :src="imageSrc"
      :alt="title"
      :loading="lazy ? 'lazy' : 'eager'"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script setup lang="ts">
import { useImage } from '@vueuse/core';

type Props = {
  lazy?: boolean;
  title: string;
  width: number;
  height: number;
  imageSrc: string;
  containerClass?: string;
};

defineOptions({ inheritAttrs: false });

const props = withDefaults(defineProps<Props>(), {
  imageSrc: '',
  containerClass: '',
  lazy: true,
});

const { isReady, error } = useImage({ src: props.imageSrc });
const attrs = useAttrs();
</script>
