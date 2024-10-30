'use server';

import { api } from '@/services/api';
import { ProductSchema } from '@/src/schema';

export async function createProduct(data: unknown) {
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
    await api.post('product', result.data);
  } catch (error) {
    console.error(error);
  }
}
