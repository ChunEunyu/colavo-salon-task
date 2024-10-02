import React, { useState } from 'react';
import { Item, Items } from '../../types';
import { getFormatPrice } from '../../utils/getFormatPrice';
import { useCurrencyStore } from '../../stores/currencyCodeStroe';
import { useCartStore } from '../../stores/cartStore';
import CheckIcon from '../../common/CheckIcon';

interface IProps {
  item: Item;
  itemKey: string;
}

function ItemCard({ item, itemKey }: IProps) {
  const { cartItems, setCartItems } = useCartStore();
  const { currencyCode } = useCurrencyStore();

  const exist = cartItems.some((item) => item[itemKey] !== undefined);
  const [checked, setChecked] = useState<boolean>(exist);

  const handleClick = () => {
    const itemObject: Items = { [itemKey]: item };

    if (checked) {
      const updated = cartItems.filter((item) => !item[itemKey]);
      setCartItems(updated);
      setChecked(false);
    } else {
      setCartItems([...cartItems, itemObject]);
      setChecked(true);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="flex justify-between items-center my-4 mx-1">
        <div className="w-5/6">
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-deep-gray">{getFormatPrice(item.price, currencyCode)}</p>
        </div>
        {checked && <CheckIcon />}
      </div>
      <div className="bg-light-gray w-full h-[0.03rem]" />
    </div>
  );
}

export default ItemCard;
