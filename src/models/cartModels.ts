export interface CartItem{
    productId: string;
    quantity: number;
}

export interface Cart{
    cartId: string,
    items: CartItem[];
    total: number;
}