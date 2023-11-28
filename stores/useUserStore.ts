import type { User } from '~/utils/types';
import type { ErrorPayload } from './useAuthStore';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const fetchUser = async () => {
    const { data } = await useAuthFetch<User, ErrorPayload>('/user');

    const authStore = useAuthStore();

    if (data.value) {
      authStore.isAuthenticated = true;
      user.value = data.value;
    }
  };

  const clearUser = () => {
    user.value = null;
  };

  return { user, fetchUser, clearUser };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
