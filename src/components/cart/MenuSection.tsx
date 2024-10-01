import React, { useState } from 'react';
import MenuBtns from './MenuBtns';
import DiscountModal from '../discount/DiscountModal';
import MenuListModal from '../menuList/MenuListModal';
import { Data } from '../../types';

interface IProps {
  data: Data | null
}

export type ModalType = 'menuList' | 'discount';
type SelectedModal = ModalType | null;

function MenuSection({ data } : IProps) {
  const [activeModal, setActiveModal] = useState<SelectedModal>(null);
  
  const handleModalOpen = (t: ModalType) => {
    setActiveModal(t);
  }

  const handleModalClose = () => {
    setActiveModal(null);
  } 

  return (
    <div>
      <MenuBtns onModalOpen={handleModalOpen} />
      { activeModal === 'menuList' && data &&
        <MenuListModal 
          items={data.items}
          onClose={handleModalClose} 
        /> 
      }
      { activeModal === 'discount' && data &&
        <DiscountModal 
          discounts={data.discounts}
          onClose={handleModalClose} 
        /> 
      }
    </div>
  );
}

export default MenuSection;
