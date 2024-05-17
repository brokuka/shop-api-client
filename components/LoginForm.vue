<script setup lang="ts">
import type { FormErrorEvent } from '#ui/types'

const authStore = useAuthStore()
const modalStore = useModalStore()
const toast = useToast()

const loginErrorMessage = ref('')
const isLoading = ref(false)

const state = reactive({
  email: undefined,
  password: undefined,
})

async function onSubmit(event: LoginSchemaType) {
  isLoading.value = true

  const { email, password } = event.data

  const { login, error } = await authStore.login({ email, password })

  isLoading.value = false

  if (error.value?.data.message)
    return (loginErrorMessage.value = error.value.data.message)

  login.value?.message && toast.add({ title: login.value.message })
  modalStore.closeAuthModal()
}

function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
}
</script>

<template>
  <UAlert
    v-if="loginErrorMessage && !isLoading"
    color="red"
    variant="subtle"
    title="Ошибка при авторизации!"
    :description="loginErrorMessage"
  />

  <UForm :schema="LoginSchema" :state="state" class="w-full space-y-4" @submit="onSubmit" @error="onError">
    <UFormGroup label="Email" name="email" size="lg" required>
      <UInput v-model="state.email" placeholder="you@example.com" />
    </UFormGroup>

    <UFormGroup label="Пароль" name="password" size="lg" required>
      <UInput v-model="state.password" placeholder="Введите пароль" type="password" />
    </UFormGroup>

    <UButton type="submit" block :loading="isLoading">
      {{ isLoading ? 'Происходит авторизация' : 'Войти' }}
    </UButton>
  </UForm>

  <UDivider label="или" />

  <div class="flex flex-col items-center md:flex-row">
    <span class="text-sm">Ещё нет аккаунта ?</span>
    <UButton variant="link" size="sm" @click="modalStore.switchAuthModalScreen">
      Зарегистрироваться!
    </UButton>
  </div>
</template>
