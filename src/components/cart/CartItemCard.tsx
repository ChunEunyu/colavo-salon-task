import React, { useState } from 'react';
import { InputNumber } from 'antd';
import { Item, Items } from '../../types';
import { getFormatPrice } from '../../utils/getFormatPrice';
import { useCurrencyStore } from '../../stores/currencyCodeStroe';
import { useCartStore } from '../../stores/cartStore';

interface IProps {
  item: Items;
}

function CartItemCard({ item }: IProps) {
  const { cartItems, setCartItems } = useCartStore();
  const { currencyCode } = useCurrencyStore();

  const key: string = Object.keys(item)[0];
  const value: Item = Object.values(item)[0];

  const [countValue, setCountValue] = useState<number>(value.count);

  const handleChange = (newValue: number | null) => {
    if (newValue !== null) {
      setCountValue(newValue);

      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem[key]) {
          return { [key]: { ...cartItem[key], count: newValue } };
        }
        return cartItem;
      });
      setCartItems(updatedItems);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center my-4 mx-1">
        <div className="w-4/5">
          <p className="font-semibold text-purple-gray">{value.name}</p>
          <p className="text-sm text-deep-gray">
            {getFormatPrice(value.price * value.count, currencyCode)}
          </p>
        </div>
        <InputNumber
          onChange={handleChange}
          size="large"
          min={1}
          max={50}
          value={countValue}
          className="border-gray hover:border-gray active:border-none"
        />
      </div>
      <div className="bg-light-gray w-full h-[0.03rem]" />
    </div>
  );
}

export default CartItemCard;
