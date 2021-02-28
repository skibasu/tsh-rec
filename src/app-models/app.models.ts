//export * as ProductsModels from "./products.models";

export interface IProduct {
    image: string;
    promo: boolean;
    name: string;
    description: string;
    rating: number;
    active: boolean;
}

export interface IQueryParams {
    search?: string | null | undefined;
    active?: string | null | undefined | boolean;
    promo?: string | null | undefined | boolean;
    limit?: number | null | undefined;
    page?: number;
}

export interface IProductState {
    data: any;
    loading: boolean;
    error: string | null;
    firstLoad: boolean;
}
export interface ILoginData {
    username: string;
    password?: string;
    token: string;
}
