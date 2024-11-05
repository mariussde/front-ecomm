'use client';

import { ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '@/hooks/use-cart';
import { Button } from './ui/button';
import Image from 'next/image';

export function CartPreview() {
  const cart = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          aria-label="Shopping Cart"
        >
          <ShoppingCart className="h-6 w-6" />
          {cart.items.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {cart.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          {cart.items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <div className="relative h-20 w-20">
                <Image
                  src={item.product.urlImage}
                  alt={item.product.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-sm text-gray-600">{item.product.subname}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-bold">
                    ${item.product.price * item.quantity}
                  </span>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        cart.updateQuantity(
                          item.product.id,
                          Math.max(0, item.quantity - 1)
                        )
                      }
                    >
                      -
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        cart.updateQuantity(item.product.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {cart.items.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
          {cart.items.length > 0 && (
            <div className="mt-4">
              <div className="mb-4 flex items-center justify-between border-t pt-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-lg font-bold">${cart.total}</span>
              </div>
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}