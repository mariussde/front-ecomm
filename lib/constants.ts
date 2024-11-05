import { Product } from '@/types';

export const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Mountain Sunrise',
    subname: 'Alps at Dawn',
    description: 'A breathtaking view of the Alps during sunrise, capturing the first light of day touching the snow-capped peaks.',
    category: 'nature',
    urlImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    price: 29.99,
    featured: true,
    bestSeller: true,
  },
  {
    id: '2',
    name: 'Urban Night',
    subname: 'Tokyo Lights',
    description: 'The vibrant nightlife of Tokyo captured in a single frame, showcasing the city\'s neon lights and urban energy.',
    category: 'cities',
    urlImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
    price: 34.99,
    featured: true,
  },
  {
    id: '3',
    name: 'Serene Lake',
    subname: 'Mirror Reflection',
    description: 'A perfectly still lake reflecting the surrounding mountains like a mirror, creating a symmetrical masterpiece.',
    category: 'nature',
    urlImage: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0',
    price: 24.99,
  },
  {
    id: '4',
    name: 'Ancient Temple',
    subname: 'Kyoto Heritage',
    description: 'A historic temple in Kyoto during cherry blossom season, embodying the essence of Japanese culture.',
    category: 'landmarks',
    urlImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    price: 39.99,
    bestSeller: true,
  },
  {
    id: '5',
    name: 'Desert Dunes',
    subname: 'Sahara Gold',
    description: 'Golden sand dunes of the Sahara Desert during sunset, showcasing nature\'s sculptural beauty.',
    category: 'nature',
    urlImage: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    price: 29.99,
    featured: true,
  },
  {
    id: '6',
    name: 'Street Portrait',
    subname: 'Urban Stories',
    description: 'A compelling portrait of a street artist in New York City, capturing the human spirit.',
    category: 'people',
    urlImage: 'https://images.unsplash.com/photo-1504703395950-b89145a5425b',
    price: 44.99,
    featured: true,
  },
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(
  (product) => product.featured
);