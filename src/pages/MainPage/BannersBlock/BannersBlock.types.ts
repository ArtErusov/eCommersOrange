import { Product } from '@/shared/types/product.ts';

export interface ProductCardProps {
  item: Product;
  isLoading: boolean;
}