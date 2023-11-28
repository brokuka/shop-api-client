export const useAuthFetch: typeof useFetch = (url, options) => {
  const cookies = useRequestHeaders(['cookie']);

  return useDefaultFetch(url, {
    credentials: 'include',
    headers: {
      ...options?.headers,
      ...cookies,
    },
    ...options,
  });
};
