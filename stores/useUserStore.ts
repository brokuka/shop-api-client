import type { User, ApiResponse } from '#imports';
import type { ErrorPayload } from './useAuthStore';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);
  const authStore = useAuthStore();
  const session = useSessionStorage<string>('session', null);

  const fetchUser = async () => {
    const { data: userData } = await useAuthFetch<ApiResponse<User>, ErrorPayload>('/user');

    if (userData.value) {
      authStore.isAuthenticated = true;
      user.value = userData.value.data;
    }
  };

  const clearUser = () => {
    user.value = null;
    authStore.isAuthenticated = false;
    session.value = undefined;
  };

  return { user, fetchUser, clearUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
