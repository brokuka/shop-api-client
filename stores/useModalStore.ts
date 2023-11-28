export type AuthScreen = 'login' | 'register';

type AuthModal = {
  opened: boolean;
  screen: AuthScreen;
};

export const useModalStore = defineStore('modal', () => {
  const authModal = reactive<AuthModal>({ opened: false, screen: 'login' });

  const showAuthModal = () => {
    authModal.opened = true;
  };

  const closeAuthModal = () => {
    authModal.opened = false;
  };

  const switchAuthModalScreen = () => {
    authModal.screen = authModal.screen === 'login' ? 'register' : 'login';
  };

  // Чтобы не оставался эффект смены между экранами
  //		подставляем значение(мс) которое равно анимации закрытия
  watchEffect(() => {
    if (!authModal.opened) {
      setTimeout(() => (authModal.screen = 'login'), 200);
    }
  });

  return { authModal, showAuthModal, closeAuthModal, switchAuthModalScreen };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}
