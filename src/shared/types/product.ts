export interface Product {
    id: number;
    customId:string;
    src: string[];
    price: number;
    label?: number;
    rating: number;
    review: number; 
    platforms: string[];
    manufacturer: string;
    text: string;
    dataSearch: string;
  }