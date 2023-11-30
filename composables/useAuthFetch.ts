type RequestMethod =
  | 'delete'
  | 'get'
  | 'GET'
  | 'HEAD'
  | 'PATCH'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'head'
  | 'patch'
  | 'post'
  | 'put'
  | 'connect'
  | 'options'
  | 'trace';

export const useAuthFetch: typeof useFetch = (url, options) => {
  const cookies = useRequestHeaders(['cookie']);
  const userStore = useUserStore();
  const session = useSessionStorage<string>('session', null);

  return useDefaultFetch(url, {
    credentials: 'include',
    headers: {
      ...options?.headers,
      ...cookies,
      authorization: `Bearer ${session.value}`,
    },
    ...options,
    onResponseError: async ({ response, request, options }) => {
      if (response.status === 401) {
        await $fetch('/auth/refresh', {
          baseURL: useRuntimeConfig().public.API_DOMAIN,
          method: 'POST',
          headers: {
            authorization: `Bearer ${session.value}`,
          },
          body: {
            user_id: userStore.user?.user_id,
          },
          credentials: 'include',
        });
      }

      await $fetch(request, {
        method: options.method as RequestMethod,
        body: options.body,
        credentials: options.credentials,
        headers: options.headers,
      });
    },
  });
};
