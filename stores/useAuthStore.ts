import type { User } from '#imports';

export type MessageResponse = {
  message: string;
};

export type AuthBody = {
  email: string;
  password: string;
};

export type ErrorPayload = {
  data: MessageResponse;
};

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore();
  const cartStore = useCartStore();
  const session = useSessionStorage<string>('session', null);

  const isAuthenticated = ref(false);

  const login = async (body: AuthBody) => {
    const { data, ...etc } = await useAuthFetch<User, ErrorPayload>('/auth/login', {
      method: 'POST',
      body,
    });

    if (data.value) {
      isAuthenticated.value = true;
      userStore.user = data.value;
      cartStore.fetchCart();

      session.value = data.value.session;
    }

    return { data, ...etc };
  };

  const register = async (body: AuthBody) => {
    return await useAuthFetch<MessageResponse, ErrorPayload>('/auth/register', {
      method: 'POST',
      body,
    });
  };

  const logout = async () => {
    isAuthenticated.value = false;

    navigateTo('/', { replace: true });

    return await useAuthFetch<MessageResponse>('/auth/logout', {
      method: 'POST',
      body: {
        user_id: userStore.user?.user_id,
      },
    });
  };

  const refresh = async () => {
    await useAuthFetch('/auth/refresh', {
      headers: {
        authorization: `Bearer ${session.value}`,
      },
      body: {
        user_id: userStore.user?.user_id,
      },
    });
  };

  return { isAuthenticated, login, register, logout, refresh };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
