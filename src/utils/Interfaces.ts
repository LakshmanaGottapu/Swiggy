export interface Product {
    id: string,
    title: string,
    price: number,
    restro: string,
    categoryType: string,
    img: string
}

export interface ProductReview{
    id: number
    productId: string
    content: string
}

