import { Product } from "../models/productModels";

let products: Product[] = [];

export const getAllProducts = (): Product[] => {
    return products;
};

export const getProductByType = (type: string): Product[] => {
    return products.filter(product => product.type.toLowerCase() === type.toLowerCase());
};

export const getProductByName = (name: string): Product[] => {
    return products.filter(product => product.name.toLowerCase() === name.toLowerCase());
};



export const addNewProduct = (newProduct: Product): Product => {
    const existingProductIndex = products.findIndex(
            product =>
            product.brand == newProduct.brand &&
            product.name == newProduct.name &&
            product.type == newProduct.type &&
            product.details == newProduct.details &&
            product.price == newProduct.price
    );
    if (existingProductIndex > -1) {
        products[existingProductIndex].quantity += newProduct.quantity;
        return products[existingProductIndex];
    } else {
        products.push(newProduct);
        return newProduct;
    }
};

export const updateProductById = (id: string, productUpdate: Product): Product | undefined => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex > -1){
        products[productIndex] = { ...products[productIndex], ...productUpdate};
        return products[productIndex];
    }
    return undefined;
}

export const deleteProductById = (id: string): boolean => {
    const productIndex = products.findIndex(product => product.id === id);
    if(productIndex > -1){
        products.splice(productIndex, 1);
        return true;
    }
    return false;
}