//export * as ProductsModels from "./products.models";

export interface IProduct {
    image: string;
    promo: boolean;
    name: string;
    description: string;
    rating: number;
    active: boolean;
}
