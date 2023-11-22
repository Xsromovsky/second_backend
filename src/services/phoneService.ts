import { Phone } from "../models/phoneModels";

let phones: Phone[] = [];

export const getAllPhones = (): Phone[] => {
    return phones;
};

export const getPhonesByBrand = (brand: string): Phone[] => {
    return phones.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
};

export const getPhonesByColor = (color: string): Phone[] => {
    return phones.filter(phone => phone.color.toLowerCase() === color.toLowerCase());
};

export const findPhonesByPrice = (maxPrice: number): Phone[] => {
    return phones.filter(phone => phone.price <= maxPrice);
};

export const getTotalQuantityByBrand = (brand: string): number => {
    return phones
        .filter(phone => phone.brand.toLowerCase() === brand.toLowerCase())
        .reduce((acc, phone) => acc + phone.quantity, 0);
}

export const getTotalQuantity = (): number => {
    return phones.reduce((acc, phone) => acc + phone.quantity, 0);
};


export const addNewPhone = (newPhone: Phone): Phone => {
    phones.push(newPhone);
    return newPhone;
};


export const updatePhoneById = (id: string, phoneUpdate: Phone): Phone | undefined => {
    const phoneIndex = phones.findIndex(phone => phone.id === id);
    if (phoneIndex > -1){
        phones[phoneIndex] = { ...phones[phoneIndex], ...phoneUpdate};
        return phones[phoneIndex];
    }
    return undefined;
};

export const deletePhoneById = (id: string): boolean => {
    const phoneIndex = phones.findIndex(phone => phone.id === id);
    if(phoneIndex > -1){
        phones.splice(phoneIndex, 1);
        return true;
    }


    return false;
};