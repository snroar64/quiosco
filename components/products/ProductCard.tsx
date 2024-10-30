import { formatCurrency, getImagePath } from '@/src/utils';
import Image from 'next/image';
import AddProductButton from './AddProductButton';
import { IProduct } from '@/services/interfaces/api';

type ProductCardProps = {
  product: IProduct;
};

export default function ProductCard({ product }: ProductCardProps) {
  // const imagePath = getImagePath(product.image);
  const imagePath = '';

  return (
    <div className="border bg-white">
      <Image
        width={400}
        height={500}
        src={imagePath}
        alt={`Imagen platillo ${product.name}`}
      />

      <div className="p-5">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {product.description}
        </p>
        <AddProductButton product={product} />
      </div>
    </div>
  );
}
