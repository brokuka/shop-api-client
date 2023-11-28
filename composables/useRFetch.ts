import type { UseFetchOptions } from 'nuxt/app';
import { defu } from 'defu';

const useRFetch = <T>(url: string | (() => string), options: UseFetchOptions<T> = {}) => {
  const cookies = useRequestHeaders(['cookie']);
  const authStore = useAuthStore();

  const defaults: UseFetchOptions<T> = {
    baseURL: useRuntimeConfig().public.API_DOMAIN,
    credentials: 'include',
    headers: {
      ...cookies,
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        authStore.refresh();
      }
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
};
