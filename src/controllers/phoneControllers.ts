import { Request, Response } from "express";
import * as phoneService from '../services/phoneService';
import { Phone } from "../models/phoneModels";

export const  getAllPhones = (req: Request, res: Response) => {
    const phones = phoneService.getAllPhones();
    res.status(200).json(phones);
};

export const getPhonesByBrand = (req: Request, res: Response) => {
    const phone = phoneService.getPhonesByBrand(req.params.brand);
    if(phone){
        res.status(200).json(phone);
        
    } else {
        res.status(404).send({ message: "specified brand not found "});
    }
};

export const getPhonesByColor = (req: Request, res: Response) => {
    const phones = phoneService.getPhonesByColor(req.params.color);
    if(phones){
        res.status(200).json(phones);
    } else {
        res.status(404).send({ message: "specified color not found "});
    }
};

export const getPhonesByPrice = (req: Request, res: Response) => {
    const maxPrice = parseFloat(req.params.price as string);
    if (isNaN(maxPrice)) {
        return res.status(400).send({ message: 'Invalid price value' });
    }
    const phones = phoneService.findPhonesByPrice(maxPrice);
    res.status(200).json(phones);
};

export const getQuantityByBrand = (req: Request, res: Response) => {
    const brand = req.params.brand;
    const totalQuantity = phoneService.getTotalQuantityByBrand(brand);
    res.status(200).json({ brand, totalQuantity });
};

export const getTotalQuantity = (req: Request, res: Response) => {
    const totalQuantity = phoneService.getTotalQuantity();
    res.status(200).json({ totalQuantity });
    console.log("Total Quantity:", totalQuantity);
};


export const addNewPhone = (req: Request, res: Response) => {
    
    const newPhone: Phone = {
        id: Math.random().toString(36).substring(2,9),
        ...req.body
    };
    const addPhone = phoneService.addNewPhone(newPhone);
    res.status(201).json(newPhone);
    
};

export const updatePhone = (req: Request, res: Response) => {
    const updatedPhone = phoneService.updatePhoneById(req.params.id, req.body);
    if(updatedPhone){
        res.status(200).json(updatedPhone);
    } else {
        res.status(404).send({ message: "Specified phone not found "});
    }
};

export const deletePhoneById = (req: Request, res: Response) => {
    const isDeleted = phoneService.deletePhoneById(req.params.id);
    if(isDeleted){
        res.status(200).send({ message: "Phone deleted succesfully "});
    } else {
        res.status(404).send({ message: "Phone not found "});
    }
};