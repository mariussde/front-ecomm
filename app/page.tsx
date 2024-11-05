import { ProductCard } from '@/components/ui/product-card';
import { FEATURED_PRODUCTS } from '@/lib/constants';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-beach-5513/1080p.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative flex h-full items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="mb-6 text-5xl font-bold text-white">
              Capture the Perfect Moment
            </h1>
            <p className="text-xl text-gray-200">
              Discover our curated collection of stunning photography
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-600">
                High-resolution images captured by professional photographers
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">Diverse Categories</h3>
              <p className="text-gray-600">
                From nature to urban landscapes, find the perfect photo
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-4 text-xl font-semibold">Instant Download</h3>
              <p className="text-gray-600">
                Get your photos immediately after purchase
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}