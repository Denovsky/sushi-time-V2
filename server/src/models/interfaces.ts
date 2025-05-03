export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    weight: number,
    status: 0 | 1 | 2,
    item_discount: number,
    created_at: Date,
    changed_at: Date
}

// export interface CartItem {
//     product: Product,
//     quantity: number
// }

// export interface Cart {
//     items: Map<number, CartItem>,
//     total: number,
//     quantity: number
// }

export interface Category {
    id: number,
    title: string,
    parent_id: number
}

// export interface Catalog {
//     items: Map<Category, Product[]>
// }