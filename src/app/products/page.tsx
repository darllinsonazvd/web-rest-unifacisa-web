'use client'

import { Header } from '@/components/header'
import { NoProducts } from '@/components/no-products'
import { ProductsList } from '@/components/products-list'
import { RegisterProductAlert } from '@/components/register-product-alert'

import { Product } from '@/models/product.model'

export default function Products() {
  const products: Product[] = []

  return (
    <div className="flex h-screen w-full flex-col">
      <Header showSearchBar={true} />

      <main className="flex w-full flex-col px-4 pt-20">
        <RegisterProductAlert />

        {products.length ? (
          <ProductsList products={products} />
        ) : (
          <NoProducts />
        )}
      </main>
    </div>
  )
}
