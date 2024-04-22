export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie('token')
  const userStore = useUserStore()

  // eslint-disable-next-line curly
  if (token.value && !userStore.user) {
    await userStore.fetchUser()
  }
})
