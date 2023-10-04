'use client'

import { useEffect, useState } from 'react'

import { Header } from '@/components/header'
import { NoProducts } from '@/components/no-products'
import { ProductsList } from '@/components/products-list'
import { RegisterProductAlert } from '@/components/register-product-alert'

import { api } from '@/lib/api'

import { Product } from '@/models/product.model'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

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
