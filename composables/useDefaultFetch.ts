export const useDefaultFetch: typeof useFetch = (request, opts) => {
  return useFetch(request, {
    baseURL: useRuntimeConfig().public.API_DOMAIN,
    headers: {
      ...opts?.headers,
    },
    ...opts,
  });
};
