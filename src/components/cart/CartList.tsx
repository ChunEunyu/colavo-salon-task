import React from 'react';
import CartItemCard from './CartItemCard';
import { CartItemsType, CartDiscountsType } from '../../types';
import CartDiscountCard from './CartDiscountCard';

interface IProps {
  cartItems: CartItemsType;
  cartDiscounts: CartDiscountsType;
}

function CartList({ cartItems, cartDiscounts }: IProps) {
  return (
    <div>
      {cartItems.map((item, index) => (
        <CartItemCard key={index} item={item} />
      ))}
      {cartDiscounts.map((discount, index) => (
        <CartDiscountCard key={index} discount={discount} />
      ))}
    </div>
  );
}

export default CartList;
