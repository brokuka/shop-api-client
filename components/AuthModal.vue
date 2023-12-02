<template>
  <UModal :model-value="opened" :ui="{ width: 'sm:max-w-[420px]' }" @update:model-value="emit('close')">
    <div class="relative flex flex-col items-center justify-center space-y-6 p-5">
      <h3 class="text-2xl font-medium">{{ title }}</h3>

      <UButton
        icon="i-mdi-close"
        class="absolute -top-3 right-6"
        variant="ghost"
        color="gray"
        @click="modalStore.closeAuthModal"
      />

      <LoginForm v-if="modalStore.authModal.screen === 'login'" />
      <RegisterForm v-else />
    </div>
  </UModal>
</template>

<script setup lang="ts">
import type { AuthScreen } from '~/stores/useModalStore';

defineProps<{
  opened: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const modalStore = useModalStore();

const titleMap: Record<AuthScreen, string> = {
  login: 'Войти',
  register: 'Регистрация',
};

const title = computed(() => titleMap[modalStore.authModal.screen]);
</script>
