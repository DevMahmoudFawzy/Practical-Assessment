import { Product } from "src/app/product/models/product.model";
import { Order } from "./order.model";

export interface OrderDetails {
    Order: Order | undefined;
    ProductsToDisplay: Product[];
}