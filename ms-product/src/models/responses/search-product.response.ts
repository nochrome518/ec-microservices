import { Product } from "../entities/product.entity";

export interface SearchProductResponse {
    products: Product[];
}