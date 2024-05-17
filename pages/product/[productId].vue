<script setup lang="ts">
const route = useRoute()
const cartStore = useCartStore()

const { data: product } = await useDefaultFetch(`/product/${route.params.productId}`, {
  transform: (r: ApiResponse<Product>) => r.data,
})

useHead({
  title: product.value?.title,
  templateParams: undefined,
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const windowSize = useWindowSize()
const isTablet = computed(() => windowSize.width.value > SCREEN_SIZES.MD)

const buttonConfig = {
  base: tw('justify-center md:max-w-[200px]'),
}

const buttonSkeletonConfig = {
  base: tw('max-w-[200px]'),
  background: tw('bg-gray-200'),
}
</script>

<template>
  <div class="grid md:grid-cols-[auto,_1fr] gap-5">
    <Image :image-src="product?.image" :width="250" :height="250" :title="product?.title" container-class="max-w-[150px] md:max-w-[250px]" />

    <div class="flex flex-col gap-7">
      <div class="flex gap-2 flex-col">
        <h1 class="font-medium text-xl">
          {{ product?.title }}
        </h1>

        <UBadge class="hidden h-fit w-fit whitespace-nowrap sm:block" variant="solid" color="gray">
          {{ product?.category }}
        </UBadge>
      </div>

      <div class="flex flex-col gap-4">
        <span class="font-bold text-2xl">{{ product?.price }}$</span>

        <ClientOnly v-if="product">
          <UButton
            v-if="!cartStore.isInCart(product.product_id)"
            :ui="buttonConfig"
            @click="cartStore.addToCart(product)"
          >
            {{ isTablet ? 'Добавить в корзину' : 'Добавить' }}
          </UButton>

          <UButton v-else :ui="buttonConfig" variant="outline" @click="navigateTo('/cart')">
            {{ isTablet ? 'Добавлен в корзину' : 'Добавлен' }}
          </UButton>

          <template #fallback>
            <div class="flex">
              <USkeleton class="h-8 w-full" :ui="buttonSkeletonConfig" />
            </div>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
