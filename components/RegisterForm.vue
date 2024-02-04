<script setup lang="ts">
import type { FormErrorEvent } from '@nuxt/ui/dist/runtime/types'

const authStore = useAuthStore()
const modalStore = useModalStore()
const toast = useToast()

const form = ref()
const inputEmail = ref<HTMLInputElement>()
const registerErrorMessage = ref('')
const isLoading = ref(false)

const state = reactive({
  email: undefined,
  password: undefined,
  confirm_password: undefined,
})

async function onSubmit(event: RegisterSchemaType) {
  isLoading.value = true

  const { email, password } = event.data

  const { data: register, error } = await authStore.register({ email, password })

  isLoading.value = false

  if (error.value?.data.message) {
    registerErrorMessage.value = error.value?.data.message

    return form.value.setErrors([{ path: 'email', message: ' ' }])
  }

  register.value?.message && toast.add({ title: register.value.message })
  modalStore.switchAuthModalScreen()
}

function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id)
  element?.focus()
}
</script>

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

    <UButton type="submit" block :loading="isLoading">
      Зарегистрироваться
    </UButton>
  </UForm>

  <UDivider label="или" />

  <div class="flex flex-col items-center md:flex-row">
    <span class="text-sm">Уже есть аккаунт ?</span>
    <UButton variant="link" size="sm" @click="modalStore.switchAuthModalScreen">
      Войти!
    </UButton>
  </div>
</template>
