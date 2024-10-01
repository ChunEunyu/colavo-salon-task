import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { ModalType } from './MenuSection';

interface IProps {
  onModalOpen: (t: ModalType) => void;
}

function MenuBtns({ onModalOpen }: IProps) {
  const handleClick = (t: ModalType) => {
    onModalOpen(t);
  };

  return (
    <>
      <div className="flex justify-center gap-3 my-4">
        <button
          onClick={() => handleClick('menuList')}
          className="flex bg-light-gray py-3 px-16 rounded-xl"
        >
          <IoMdAddCircle className="w-4 h-4 mt-1 text-deep-gray" />
          <p className="text-deep-gray font-semibold">시술</p>
        </button>
        <button
          onClick={() => handleClick('discount')}
          className="flex bg-baby-pink py-3 px-16 rounded-xl"
        >
          <IoMdAddCircle className="w-4 h-4 mt-1 text-deep-pink" />
          <p className="text-deep-pink font-semibold">할인</p>
        </button>
      </div>
      <div className="w-full h-[1px] border-[1px] border-light-gray border-dashed" />
    </>
  );
}

export default MenuBtns;
