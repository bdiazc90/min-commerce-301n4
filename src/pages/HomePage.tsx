import { ProductList } from "@/components/ProductList"

export function HomePage() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Min Commerce</h1>
                <h2 className="text-3xl text-slate-700">Productos</h2>
            </div>
            <ProductList />
        </div>
    )
}