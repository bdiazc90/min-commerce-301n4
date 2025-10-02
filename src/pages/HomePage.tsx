import { ProductList } from "@/components/ProductList"

export function HomePage() {
    return (
        <div>
            <h1 className='text-5xl'>Min Commerce</h1>
            <h2 className="text-3xl">Productos</h2>
            <ProductList />
        </div>
    )
}