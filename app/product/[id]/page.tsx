import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { ALL_PRODUCTS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

// Generate static params for all products at build time
export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = ALL_PRODUCTS.find((p) => p.id === params.id);
  const cart = useCart();

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={product.urlImage}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-2 text-xl text-gray-600">{product.subname}</p>
          <div className="mt-4">
            <span className="text-2xl font-bold">${product.price}</span>
          </div>
          <p className="mt-6 text-gray-600">{product.description}</p>
          <div className="mt-8">
            <Button
              size="lg"
              className="w-full"
              onClick={() => cart.addItem(product)}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold">Details</h2>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gray-600">Category</dt>
                <dd className="mt-1 font-medium capitalize">{product.category}</dd>
              </div>
              {product.bestSeller && (
                <div>
                  <dt className="text-sm text-gray-600">Recognition</dt>
                  <dd className="mt-1 font-medium">Best Seller</dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}