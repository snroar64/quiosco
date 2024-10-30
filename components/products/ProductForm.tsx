import { IProduct } from '@/services/interfaces/api';

type ProductFormProps = {
  product?: IProduct;
};

export default async function ProductForm({ product }: ProductFormProps) {
  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="name">
          Nombre:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre Producto"
          defaultValue={product?.name}
        />
      </div>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="minimumAmount">
          Valor minimo:
        </label>
        <input
          id="minimumAmount"
          name="minimumAmount"
          className="block w-full p-3 bg-slate-100"
          placeholder="valor minimo"
          defaultValue={product?.minimumAmount}
        />
      </div>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="maximumAmount">
          Valor maximo:
        </label>
        <input
          id="maximumAmount"
          name="maximumAmount"
          className="block w-full p-3 bg-slate-100"
          placeholder="valor maximo"
          defaultValue={product?.maximumAmount}
        />
      </div>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="rateInterest">
          Tasa de interes:
        </label>
        <input
          id="rateInterest"
          name="rateInterest"
          className="block w-full p-3 bg-slate-100"
          placeholder="valor maximo"
          defaultValue={product?.rateInterest}
        />
      </div>
    </>
  );
}
