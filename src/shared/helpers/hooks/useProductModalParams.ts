import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useProductModalParams = (productId: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalParam = searchParams.get('modal');
    const currentProductId = searchParams.get('productId');

    if (modalParam === 'product-details' && currentProductId === productId.toString()) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [searchParams, productId]);

  const openModal = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('modal', 'product-details');
    newSearchParams.set('productId', productId.toString());
    setSearchParams(newSearchParams);
  };

  const closeModal = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('modal');
    newSearchParams.delete('productId');
    setSearchParams(newSearchParams);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
