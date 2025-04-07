export interface Product {
    id: number;
    src: string[];
    price: number;
    label?: string;
    rating: number;
    review: number; 
    platforms: string[];
    manufacturer: string;
    text: string;
  }