import { z } from 'zod';

export const OrderSchema = z.object({
  name: z.string().min(1, 'Tu Nombre es Obligatorio'),
  total: z.number().min(1, 'Hay errores en la orden'),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
});

export const OrderIdSchema = z.object({
  orderId: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: 'Hay errores' }),
});

export const SearchSchema = z.object({
  search: z
    .string()
    .trim()
    .min(1, { message: 'La búsqueda no puede ir vacia' }),
});

export const ProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'El Nombre del producto no puede ir vacio' }),
  minimumAmount: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: 'Valor minimo no valido' })
    .or(z.number().min(1, { message: 'Valor minimo es obligatoria' })),
  maximumAmount: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .refine((value) => value > 0, { message: 'Valor maximo no valido' })
    .or(z.number().min(1, { message: 'Valor maximo es obligatorio' })),
  rateInterest: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, {
      message: 'La tasa de interes no es valida',
    })
    .or(z.number().min(1, { message: 'La tasa de interes es obligatoria' })),
});
