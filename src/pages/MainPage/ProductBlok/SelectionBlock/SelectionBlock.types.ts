export interface SelectionBlockProps {
  category: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}



export interface Category {
  id: string;
  name: string;
}

