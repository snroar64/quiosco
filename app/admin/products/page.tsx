import { redirect } from 'next/navigation';
import ProductsPagination from '@/components/products/ProductsPagination';
import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading';
import Link from 'next/link';
import ProductSearchForm from '@/components/products/ProductSearchForm';
import { api } from '@/services/api';

async function getProducts() {
  const products = await api.get('product');
  return products;
}

// export type IProduct = Awaited<ReturnType<typeof getProducts>>;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  // const page = +searchParams.page || 1;
  // if (page < 0) redirect('/admin/products');

  const products = await getProducts();

  return (
    <>
      <Heading>Administrar Productos</Heading>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
        <Link
          href={'/admin/products/new'}
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
        >
          Crear Producto
        </Link>

        <ProductSearchForm />
      </div>

      <ProductTable products={products} />
    </>
  );
}
