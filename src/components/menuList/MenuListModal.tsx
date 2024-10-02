import React from 'react';
import { FaPlus, FaXmark } from 'react-icons/fa6';
import { Items } from '../../types';
import ItemCardList from './ItemCardList';
import ModalLayout from '../../common/ModalLayout';

interface IProps {
  items: Items;
  onClose: () => void;
}

function MenuListModal({ items, onClose }: IProps) {
  return (
    <ModalLayout>
      <div className="relative flex justify-center items-center mt-1 mb-3 mx-2">
        <FaXmark onClick={onClose} className="absolute left-0 w-8 h-8 text-deep-gray" />
        <p className="font-bold text-lg">시술메뉴</p>
        <FaPlus className="absolute right-0 w-8 h-8 text-deep-gray" />
      </div>
      <div className="h-5/6 overflow-y-auto mb-3">
        <ItemCardList items={items} />
      </div>
      <div className="flex justify-center">
        <button
          onClick={onClose}
          className="absolute w-11/12 bottom-3 bg-purple text-white py-3 rounded-md"
        >
          완료
        </button>
      </div>
    </ModalLayout>
  );
}

export default MenuListModal;
