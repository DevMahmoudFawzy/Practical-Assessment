export interface OrderDetails {
    OrderId: string;
    OrderDate: string;
    UserId: string;
    Products: { ProductId: number, Quantity: number }[];
    PaymentType: string;
}