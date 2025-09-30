import type { Product } from "../types";

export function ProductCard(product: Product) {
    return (
        <div className="p-6 border border-slate-400 rounded-lg ">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            {product.onSale && <p className="text-rose-200 font-extrabold text-lg">Remate!</p>}

            {product.salePrice ? (
                <p className="text-rose-300 text-xl font-extrabold">{product.salePrice}</p>
            ) : (
                <p className="text-green-300 text-xl font-extrabold">{product.price}</p>
            )}
        </div>
    )
}