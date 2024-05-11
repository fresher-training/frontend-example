import type { Product, ProductReponse } from '../type/product';

export class HomeLogic {
    public getUsers(name: string): string[] {
        const db = ["The Anh", "Tuan", "Quy", "Phuc", "Thinh", "Huy", "Thien"];
        if (name) {
            // search
            const newdb = db.filter(a => a.toLowerCase().includes(name.toLowerCase()));
            return newdb;
        } else {
            return db;
        }
    }

    public async getProducts(): Promise<Product[]> {
        const products: Product[] = [];
        const response = await fetch('https://dummyjson.com/products');
        if (response.ok) {
            const responseData = await response.json() as ProductReponse;
            for (const productItem of responseData.products) {
                products.push(productItem);
            }
        }
        return products;
    }
}