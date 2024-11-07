export interface ProductOpportunity {
    asin: string,
    date: string,
    title: string,
    url: string,
    actual_price: number,
    difference: number,
    rating: number,
    reviews_count: number,
    is_prime: number,
    url_image: string,
    best_seller: number,
    is_sponsored: number,
    is_amazons_choice: number,
    shipping_information?: string,
    sales_volume?: string,
    category: string
}
