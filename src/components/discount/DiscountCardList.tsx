import React from 'react';
import { Discounts } from '../../types';
import DiscountCard from './DiscountCard';

interface IProps {
  discounts: Discounts;
}
  
function DiscountCardList({ discounts }: IProps) {
  return (
    <div className='pt-1 px-3'>
      {Object.entries(discounts).map(([key, discount], index) => (
        <DiscountCard
          key={index} 
          discount={discount}
          discountKey={key}
        />
      ))}
    </div>
  );
}

export default DiscountCardList;
