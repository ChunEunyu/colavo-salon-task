export interface Item {
    count: number;
    name: string;
    price: number;
}

export interface Discount {
    name: string;
    rate: number;
}

export type Items = Record<string, Item>
export type Discounts = Record<string, Discount>
export type CurrencyCode = string;

export interface Data {
    items: Items;
    discounts: Discounts;
    currency_code: CurrencyCode;
}

export type CartDiscount = {
    name: string;
    rate: number;
    list: string[] | [];
};

export type CartDiscountObject = Record<string, CartDiscount>;

export type CartItemsType = Items[] | [];
export type CartDiscountsType = Array<CartDiscountObject> | [];
