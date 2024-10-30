'use server';

import { api } from '@/services/api';
import { prisma } from '@/src/lib/prisma';
import { ProductSchema } from '@/src/schema';
import { revalidatePath } from 'next/cache';

export async function updateProduct(data: unknown, id: string) {
  const result = ProductSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }

  try {
    await api.put(`product/${id}`, data);
  } catch (error) {}
  revalidatePath('/admin/products');
}
