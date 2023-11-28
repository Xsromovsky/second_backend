import { Request, Response } from "express";
import * as productService from '../services/productServices'
import { Product } from "../models/productModels";

export const getAllProducts = (req: Request, res: Response) => {
    const products = productService.getAllProducts();
    res.status(200).json(products);
};

export const getProductByType = (req: Request, res:Response) => {
    const product = productService.getProductByType(req.params.type);
    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).send({ message: "Specified type not found "});
    }
};

export const getProductByName = (req: Request, res: Response) => {
    const product = productService.getProductByName(req.params.name);
    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).send({ message: "Specified name not found "});
    }
};

export const addNewProduct = (req: Request, res: Response) => {
    const newProduct: Product = {
        id: Math.random().toString(36).substring(2, 20),
        ...req.body
    };
    const addProduct = productService.addNewProduct(newProduct);
    res.status(201).json(addProduct);
};

export const updateProductById = (req: Request, res: Response) => {
    const updateProduct = productService.updateProductById(req.params.id, req.body);
    if(updateProduct){
        res.status(200).json(updateProduct);
    } else {
        res.status(404).send({ message: "Specified ID not exist"});
    }
};

export const deleteProductById = (req: Request, res: Response) => {
    const isDeleted = productService.deleteProductById(req.params.id);
    if(isDeleted){
        res.status(200).send({ message: "Product deleted succesfully"});
    } else {
        res.status(404).send({ message: "Product not found" });
    }
};
