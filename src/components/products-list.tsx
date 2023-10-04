import { Product } from '@/models/product.model'

interface ProductsListProps {
  products: Product[]
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div>
      <p>{JSON.stringify(products)}</p>
    </div>
  )
}
