import type { Product, ApiResponse } from '~/utils/types';

export type CartItem = {
  quantity: number;
  cart_item_id?: number;
} & Product;

export type CartResoponse = {
  cart_id: number;
  user_id: number;
  date: string;
  items: ({
    cart_item_id: number;
  } & CartItem)[];
  total_price: number;
  total_quantity: number;
};

export type CartStatus = 'idle' | 'loading' | 'loaded';

export const useCartStore = defineStore('cart', () => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  const items = ref<Nullable<CartItem[]>>(null);
  const status = ref<CartStatus>('idle');

  const totalQuantity = computed(() => items.value?.reduce((acc, item) => acc + item.quantity, 0));
  const totalPrice = computed(() => items.value?.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
  const isInCart = computed(() => (product_id: number) => {
    const existingProduct = items.value?.find((item) => item.product_id === product_id);

    return Boolean(existingProduct);
  });
  const isLoading = computed(() => status.value === 'loading');

  const fetchCart = async () => {
    const { data: cart } = await useAuthFetch<ApiResponse<CartResoponse>>('/cart');

    if (cart.value?.data?.items) {
      items.value = cart.value.data.items;

      status.value = 'loaded';
    }
  };

  const addToCart = async (product: Product, quantity: number = 1) => {
    const { product_id } = product;

    items.value = [...(items.value || []), { ...product, quantity }];

    if (authStore.isAuthenticated) {
      await useAuthFetch('/cart', {
        method: 'POST',
        body: {
          user_id: userStore.user?.user_id,
          product_id,
          quantity,
        },
      });
    }
  };

  const removeFromCart = async (product_id: number) => {
    if (!items.value) return;

    items.value = items.value.filter((item) => item.product_id !== product_id);

    if (authStore.isAuthenticated) {
      return await useAuthFetch(`/cart/${product_id}`, {
        method: 'DELETE',
        body: {
          user_id: userStore.user?.user_id,
        },
      });
    }
  };

  const changeProductCount = (product_id: number, quantity: number) => {
    const existingProduct = items.value?.find((item) => item.product_id === product_id);

    if (!existingProduct) return;

    existingProduct.quantity = quantity;

    if (authStore.isAuthenticated) {
      fetchChangeProductCount(existingProduct);
    }
  };

  const fetchChangeProductCount = useDebounceFn(async (existingProduct: CartItem) => {
    status.value = 'loading';

    await useAuthFetch('/cart/update', {
      method: 'POST',
      body: {
        user_id: userStore.user?.user_id,
        product_id: existingProduct.product_id,
        quantity: existingProduct.quantity,
      },
    });

    status.value = 'loaded';
  }, 1000);

  const changeStatus = (to: CartStatus) => {
    status.value = to;
  };

  const clearCart = () => {
    items.value = null;
  };

  return {
    items,
    status,
    totalPrice,
    totalQuantity,
    isInCart,
    isLoading,
    addToCart,
    removeFromCart,
    changeProductCount,
    fetchCart,
    changeStatus,
    clearCart,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
