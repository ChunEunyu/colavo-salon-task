import React, { useState } from 'react';
import CheckIcon from '../../common/CheckIcon';
import { Discount } from '../../types';
import { useCartStore } from '../../stores/cartStore';

interface IProps {
  discount: Discount;
  discountKey: string;
}
  
function DiscountCard({ discount, discountKey }: IProps) {
  const { cartItems, cartDiscounts, setCartDiscounts } = useCartStore();
  
  const exist = cartDiscounts.some(discount => discount[discountKey] !== undefined);
  const [checked, setChecked] = useState<boolean>(exist);

  const handleClick = () => {
    const allItemsKeys = cartItems.map(item => Object.keys(item)[0]);
    const discountObject = { [discountKey] : { ...discount, list: allItemsKeys } };
    
    if (checked) {
      const updated = cartDiscounts.filter(discount => !discount[discountKey])
      setCartDiscounts(updated);
      setChecked(false);
    } else {
      setCartDiscounts([ ...cartDiscounts, discountObject])
      setChecked(true);
    }
  }

  return (
    <div onClick={handleClick}>
      <div className='flex justify-between items-center my-4 mx-1'>
        <div className='w-5/6'>
          <p className='font-semibold'>
            {discount.name}
          </p>
          <p className='text-sm text-deep-pink'>
            {`${(discount.rate * 100).toFixed(0)}%`}
          </p>
        </div>
        { checked && <CheckIcon /> }
      </div>
      <div className='bg-light-gray w-full h-[0.03rem]' />
    </div>
  );
}

export default DiscountCard;
