export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie('token');
  const userStore = useUserStore();
  const cartStore = useCartStore();

  if (token.value && !userStore.user) {
    await userStore.fetchUser();
    await cartStore.fetchCart();
  }
});
