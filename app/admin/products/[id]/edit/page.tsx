import EditProductForm from '@/components/products/EditProductForm';
import ProductForm from '@/components/products/ProductForm';
import GoBackButton from '@/components/ui/GoBackButton';
import Heading from '@/components/ui/Heading';
import { api } from '@/services/api';
import { notFound } from 'next/navigation';

async function getProductById(id: string) {
  const product = await api.get(`product/${id}`);

  if (!product) {
    notFound();
  }

  return product;
}

export default async function EditProductsPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  return (
    <>
      <Heading>Editar Producto: {product.name}</Heading>

      <GoBackButton />

      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </>
  );
}
