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
  | 'trace'

export const useAuthFetch: typeof useFetch = (url, options) => {
  const userStore = useUserStore()
  const session = useSessionStorage<string>('session', null)
  const headers = useRequestHeaders()

  return useDefaultFetch(url, {
    credentials: 'include',
    headers: {
      ...headers,
      ...options?.headers,
      ...(session.value && { authorization: `Bearer ${session.value}` }),
    },
    ...options,
    onResponseError: async ({ response, request, options }) => {
      if (response.status === 401) {
        await $fetch('/auth/refresh', {
          baseURL: '/api',
          method: 'POST',
          headers: {
            ...(session.value && { authorization: `Bearer ${session.value}` }),
          },
          body: {
            user_id: userStore.user?.user_id,
          },
          credentials: 'include',
        })
      }

      if (response.status === 401) {
        await $fetch(request, {
          method: options.method as RequestMethod,
          body: options.body,
          credentials: options.credentials,
          headers: options.headers,
        })
      }
    },
  })
}
