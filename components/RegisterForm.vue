<template>
  <UAlert
    v-if="registerErrorMessage"
    color="red"
    variant="subtle"
    title="Ошибка при регистрации!"
    :description="registerErrorMessage"
  />

  <UForm
    ref="form"
    :schema="RegisterSchema"
    :state="state"
    class="w-full space-y-4"
    @submit="onSubmit"
    @error="onError"
  >
    <UFormGroup label="Email" name="email" size="lg" required>
      <UInput ref="inputEmail" v-model="state.email" placeholder="you@example.com" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password" size="lg" required>
      <UInput v-model="state.password" placeholder="Введите пароль" type="password" />
    </UFormGroup>

    <UFormGroup label="Подтвердите пароль" name="confirm_password" size="lg" required>
      <UInput v-model="state.confirm_password" placeholder="Повторите пароль" type="password" />
    </UFormGroup>

    <UButton type="submit" block :disabled="isFormLoading"> Зарегистрироваться </UButton>
  </UForm>

  <UDivider label="или" />

  <div class="flex flex-col items-center md:flex-row">
    <span class="text-sm">Уже есть аккаунт ?</span>
    <UButton variant="link" size="sm" @click="modalStore.switchAuthModalScreen">Войти!</UButton>
  </div>
</template>

<script setup lang="ts">
import type { FormErrorEvent } from '@nuxt/ui/dist/runtime/types';

const authStore = useAuthStore();
const modalStore = useModalStore();
const toast = useToast();

const form = ref();
const inputEmail = ref<HTMLInputElement>();
const registerErrorMessage = ref('');
const isFormLoading = ref(false);

const state = reactive({
  email: undefined,
  password: undefined,
  confirm_password: undefined,
});

const onSubmit = async (event: RegisterSchemaType) => {
  isFormLoading.value = true;

  const { email, password } = event.data;

  const { error } = await authStore.register({ email, password });

  if (error.value?.data.message) {
    registerErrorMessage.value = error.value.data.message;
    form.value.setErrors([{ path: 'email', message: ' ' }]);
  } else {
    toast.add({ title: 'Регистрация прошла успешна' });
    modalStore.switchAuthModalScreen();
  }

  isFormLoading.value = false;
};

const onError = (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
};
</script>
