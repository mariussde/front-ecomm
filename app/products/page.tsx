'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { ProductCard } from '@/components/ui/product-card';
import { ALL_PRODUCTS } from '@/lib/constants';
import { Category } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const CATEGORIES: { label: string; value: Category }[] = [
  { label: 'People', value: 'people' },
  { label: 'Premium', value: 'premium' },
  { label: 'Pets', value: 'pets' },
  { label: 'Food', value: 'food' },
  { label: 'Landmarks', value: 'landmarks' },
  { label: 'Cities', value: 'cities' },
  { label: 'Nature', value: 'nature' },
];

export default function ProductsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const selectedCategories = searchParams.get('categories')?.split(',') || [];

  const filteredProducts = selectedCategories.length > 0
    ? ALL_PRODUCTS.filter((product) => 
        selectedCategories.includes(product.category)
      )
    : ALL_PRODUCTS;

  const updateCategories = (category: Category, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);

    const params = new URLSearchParams(searchParams);
    if (newCategories.length > 0) {
      params.set('categories', newCategories.join(','));
    } else {
      params.delete('categories');
    }
    
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="mt-2 text-gray-600">
          {filteredProducts.length} products available
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="space-y-6 rounded-lg border p-6">
          <h2 className="font-semibold">Categories</h2>
          <div className="space-y-4">
            {CATEGORIES.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <Checkbox
                  id={category.value}
                  checked={selectedCategories.includes(category.value)}
                  onCheckedChange={(checked) => 
                    updateCategories(category.value, checked as boolean)
                  }
                />
                <Label
                  htmlFor={category.value}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center">
              <p className="text-gray-500">No products found with selected filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}