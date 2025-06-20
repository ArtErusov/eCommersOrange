import { Category, SortBy } from "../ProductBlok.types";

export interface SelectionBlockProps {
  category: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
  setSelectedSortBy: (id: number) => void;
  selectedSortBy: number;
  sortBy: SortBy[];
}



