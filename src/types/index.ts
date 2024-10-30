import { IProduct } from '@/services/interfaces/api';
import { Order, OrderProducts, Product } from '@prisma/client';

export type OrderItem = Pick<IProduct, 'id' | 'name'> & {
  quantity: number;
  //   subtotal: number;
};

export type OrderWithProducts = Order & {
  orderProducts: (OrderProducts & {
    product: IProduct;
  })[];
};
