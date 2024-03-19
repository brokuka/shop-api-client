export const useDefaultFetch: typeof useFetch = (request, opts) => {
  return useFetch(request, {
    baseURL: '/api',
    headers: {
      ...opts?.headers,
    },
    ...opts,
  })
}
