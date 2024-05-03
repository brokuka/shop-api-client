<script setup lang="ts">
import type { Product } from '~/utils/types'

const { ...props } = defineProps<Product>()

const windowSize = useWindowSize()

const cartStore = useCartStore()

const isTablet = computed(() => windowSize.width.value > 768)
const product = computed(() => ({ ...props }))

const cardConfig = {
  base: '',
  shadow: '',
  ring: tw('ring-0'),
  body: {
    padding: tw('py-3 sm:py-2 px-0 sm:px-0'),
  },
  header: {
    padding: '',
  },
}

const tooltipConfig = {
  base: tw('h-fit text-clip'),
  container: tw('z-[2]'),
}

const buttonConfig = {
  rounded: tw('rounded-none rounded-b-lg'),
}

const buttonSkeletonConfig = {
  base: '',
  rounded: tw('rounded-none rounded-b-lg'),
  background: tw('bg-gray-200'),
}
</script>

<template>
  <UTooltip :text="title" :ui="tooltipConfig" :popper="{ arrow: true, placement: 'bottom' }" :prevent="!isTablet">
    <div class="flex w-full flex-col rounded-lg shadow dark:bg-gray-900">
      <NuxtLink
        class="relative h-full w-full px-2 pt-4 before:absolute before:inset-0 before:z-[1] md:px-4"
        :to="`/product/${slug}`"
      >
        <UCard
          class="flex h-full flex-col space-y-3 [&>*:nth-child(2)]:h-full [&>*:nth-child(2)]:flex-1"
          :ui="cardConfig"
        >
          <template #header>
            <Image
              :image-src="image"
              :width="200"
              :height="200"
              :lazy="true"
              :title="title"
              container-class="aspect-w-[110] aspect-h-[110]"
              class="object-contain"
            />
          </template>

          <div class="flex h-full flex-col space-y-3">
            <span class="line-clamp-3 flex-1 text-sm md:text-base">{{ title }}</span>

            <span class="text-center text-lg font-bold">{{ price }}$</span>
          </div>
        </UCard>
      </NuxtLink>

      <ClientOnly>
        <UButton
          v-if="!cartStore.isInCart(product.product_id)"
          block
          :ui="buttonConfig"
          @click="cartStore.addToCart(product)"
        >
          {{ isTablet ? 'Добавить в корзину' : 'Добавить' }}
        </UButton>

        <UButton v-else block :ui="buttonConfig" variant="outline" @click="navigateTo('/cart')">
          {{ isTablet ? 'Добавлен в корзину' : 'Добавлен' }}
        </UButton>

        <template #fallback>
          <div class="flex">
            <USkeleton class="h-8 w-full" :ui="buttonSkeletonConfig" />
          </div>
        </template>
      </ClientOnly>
    </div>
  </UTooltip>
</template>
