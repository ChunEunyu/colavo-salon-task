import React from 'react';
import { useCartStore } from '../../stores/cartStore';
import { useCurrencyStore } from '../../stores/currencyCodeStroe';
import { getFormatPrice } from '../../utils/getFormatPrice';
import { getFinalPrice } from '../../utils/getPrice';

function TotalCart() {
  const { currencyCode } = useCurrencyStore();
  const { cartItems, cartDiscounts } = useCartStore();
  const totalPrice = getFinalPrice(cartItems, cartDiscounts);

  const handleClick = () => {
    alert('완료!');
  };

  return (
    <div className="absolute left-0 right-0 bottom-3 w-full">
      <div className="flex justify-between items-center my-4 mx-5">
        <p className="text-deep-gray">합계</p>
        <p className="text-3xl">{getFormatPrice(totalPrice, currencyCode)}</p>
      </div>
      <div className="flex justify-center">
        <button onClick={handleClick} className="w-11/12 bg-purple text-white py-3 rounded-md">
          완료
        </button>
      </div>
    </div>
  );
}

export default TotalCart;
