import type { Product } from '~/utils/types';

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

export const useCartStore = defineStore('cart', () => {
  const authStore = useAuthStore();

  const items = ref<Nullable<CartItem[]>>(null);

  const totalQuantity = computed(() => items.value?.reduce((acc, item) => acc + item.quantity, 0));
  const totalPrice = computed(() => items.value?.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2));
  const isInCart = computed(() => (product_id: number) => {
    const existingProduct = items.value?.find((item) => item.product_id === product_id);

    return Boolean(existingProduct);
  });

  const fetchCart = async () => {
    const { data: cart } = await useAuthFetch<CartResoponse>('/cart');

    if (cart.value) {
      items.value = cart.value.items;
    }
  };

  const addToCart = async (product: Product) => {
    const { product_id } = product;

    if (authStore.isAuthenticated) {
      await useAuthFetch('/cart', {
        method: 'POST',
        body: {
          product_id,
          quantity: 1,
        },
      });
    }

    const existingProduct = items.value?.find((item) => item.product_id === product.product_id);

    if (existingProduct) {
      return existingProduct.quantity++;
    }

    if (!items.value) {
      return (items.value = [{ ...product, quantity: 1 }]);
    }

    items.value = [...items.value, { ...product, quantity: 1 }];
  };

  const removeFromCart = async (product_id: number) => {
    if (!items.value) return;

    items.value = items.value.filter((item) => item.product_id !== product_id);

    if (authStore.isAuthenticated) {
      return await useAuthFetch(`/cart/${product_id}`, {
        method: 'DELETE',
      });
    }
  };

  const changeProductCount = async (product_id: number, quantity: number) => {
    const existingProduct = items.value?.find((item) => item.product_id === product_id);

    if (!existingProduct) return;

    existingProduct.quantity = quantity;

    if (authStore.isAuthenticated) {
      await useAuthFetch('/cart/update', {
        method: 'POST',
        body: {
          product_id,
          quantity: existingProduct.quantity,
        },
      });
    }
  };

  const clearCart = () => {
    items.value = null;
  };

  return {
    items,
    totalPrice,
    totalQuantity,
    addToCart,
    removeFromCart,
    isInCart,
    changeProductCount,
    fetchCart,
    clearCart,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
