export interface TestResult {
    id: string;
    reaction: string;
    rating: number;
    survival_status: boolean;
    productId: string;
    userId: string;
    userName?: string;
    productName?: string;
}