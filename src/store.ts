import { create } from 'zustand';
import { OrderItem } from './types';
import { IProduct } from '@/services/interfaces/api';

interface Store {
  order: OrderItem[];
  addToOrder: (product: IProduct) => void;
  increaseQuantity: (id: IProduct['id']) => void;
  decreaseQuantity: (id: IProduct['id']) => void;
  removeItem: (id: IProduct['id']) => void;
  clearOrder: () => void;
}

export const useStore = create<Store>((set, get) => ({
  order: [],
  addToOrder: (product) => {
    const { ...data } = product;
    let order: OrderItem[] = [];
    if (get().order.find((item) => item.id === product.id)) {
      order = get().order.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              //   subtotal: item.price * (item.quantity + 1),
            }
          : item
      );
    } else {
      order = [
        ...get().order,
        {
          ...data,
          quantity: 1,
          //   subtotal: 1 * product.price,
        },
      ];
    }
    set(() => ({
      order,
    }));
  },
  increaseQuantity: (id) => {
    set((state) => ({
      order: state.order.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              //   subtotal: item.price * (item.quantity + 1),
            }
          : item
      ),
    }));
  },
  decreaseQuantity: (id) => {
    const order = get().order.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity - 1,
            // subtotal: item.price * (item.quantity - 1),
          }
        : item
    );

    set(() => ({
      order,
    }));
  },
  removeItem: (id) => {
    set((state) => ({
      order: state.order.filter((item) => item.id !== id),
    }));
  },
  clearOrder: () => {
    set(() => ({
      order: [],
    }));
  },
}));
