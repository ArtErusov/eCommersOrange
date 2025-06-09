import { Product } from "@/shared/types/product";

export interface BannerCardProps {
  item: Product;
}

export interface TimeLeft {
  hours: string;
  minutes: string;
  seconds: string;
}