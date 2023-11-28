<template>
  <div>
    <UCard class="sticky right-0 top-3 h-fit">
      <template #header>
        <span class="text-xl font-medium">Ваш заказ</span>
      </template>

      <div class="flex flex-col space-y-3">
        <CartSummaryItem label="Товар" :value="`${cartStore.totalQuantity}шт`" />
        <CartSummaryItem label="Итого" :value="`${cartStore.totalPrice}$`" />
      </div>

      <template #footer>
        <UButton size="xl" block :loading="isSubmitLoading" @click="onSubmit">Перейти к оплате</UButton>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const modalStore = useModalStore();
const authStore = useAuthStore();
const toats = useToast();

const isSubmitLoading = ref(false);

const onSubmit = async () => {
  if (!authStore.isAuthenticated) {
    return modalStore.showAuthModal();
  }

  isSubmitLoading.value = true;

  const { data } = await useAuthFetch<{ message: string }>('/order', {
    method: 'POST',
    body: cartStore.items?.map(({ product_id, quantity }) => ({ product_id, quantity })),
  });

  if (data.value) {
    toats.add({ title: data.value.message });
    cartStore.clearCart();
  }

  isSubmitLoading.value = false;
};
</script>
