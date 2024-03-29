import type { ApiResponse, User } from '#imports'

export interface MessageResponse {
  message: string
}

export interface AuthBody {
  email: string
  password: string
}

export interface ErrorPayload {
  data: MessageResponse
}

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore()
  const cartStore = useCartStore()
  const session = useSessionStorage<string>('session', null)

  const isAuthenticated = ref(false)

  const login = async (body: AuthBody) => {
    const { data: login, ...etc } = await useAuthFetch<ApiResponse<User>, ErrorPayload>('/auth/login', {
      method: 'POST',
      body,
    })

    if (login.value) {
      isAuthenticated.value = true
      userStore.user = login.value.data
      cartStore.fetchCart()

      session.value = login.value.data?.session

      /* TODO: исправить когда будет полноценная система с корзиной */
      cartStore.removeCart()
    }

    return { login, ...etc }
  }

  const register = async (body: AuthBody) => {
    return await useAuthFetch<ApiResponse, ErrorPayload>('/auth/register', {
      method: 'POST',
      body,
    })
  }

  const logout = async () => {
    isAuthenticated.value = false

    navigateTo('/', { replace: true })

    const { data } = await useAuthFetch<ApiResponse>('/auth/logout', {
      method: 'POST',
      body: {
        user_id: userStore.user?.user_id,
      },
    })

    if (!data.value)
      return

    cartStore.clearCart()
    userStore.clearUser()

    return data.value
  }

  const refresh = async () => {
    await useAuthFetch('/auth/refresh', {
      headers: {
        authorization: `Bearer ${session.value}`,
      },
      body: {
        user_id: userStore.user?.user_id,
      },
    })
  }

  return { isAuthenticated, login, register, logout, refresh }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
