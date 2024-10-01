import React, { useState } from 'react';
import { useCartStore } from '../../stores/cartStore';
import { useCurrencyStore } from '../../stores/currencyCodeStroe';
import { CartDiscountObject, CartDiscount } from '../../types';
import { Select } from 'antd';
import { getFormatPrice } from '../../utils/getFormatPrice';
import { getDiscountedPrice } from '../../utils/getPrice';

interface IProps {
  discount: CartDiscountObject;
}

function CartDiscountCard({ discount }: IProps) {
  const key: string = Object.keys(discount)[0];
  const value: CartDiscount = Object.values(discount)[0];
  const { cartItems, cartDiscounts, setCartDiscounts } = useCartStore();
  const { currencyCode } = useCurrencyStore();

  // 할인이 적용된 상품 정보 리스트
  const discountedList = value.list.map((key) => {
    const foundProduct = cartItems.find((item) => Object.keys(item)[0] === key);
    return foundProduct ?? {};
  });

  // 할인이 적용된 상품 이름 및 수량 리스트
  const discountedOptions = cartItems.map((item) => {
    const key = Object.keys(item)[0];
    const product = Object.values(item)[0];
    return {
      ['label']: product.count > 1 ? `${product.name}x${product.count}` : product.name,
      ['value']: key,
    };
  });

  const totalDiscounts = getDiscountedPrice(discountedList, [discount]);

  // 할인 상품 선택 드롭다운
  const discountedNameWithCountArray = discountedOptions.map((item) => Object.values(item)[0]);
  const discountedKeys = discountedOptions.map((item) => Object.values(item)[1]);
  const [selectedTags, setSelectedTags] = useState<string[]>(discountedKeys);

  // 드롭다운 선택에 대한 change
  const handleChange = (value: string[]) => {
    setSelectedTags(value);

    const updatedData = cartDiscounts.map((discount) => {
      if (discount[key]) {
        return {
          [key]: {
            ...discount[key],
            list: value,
          },
        };
      }
      return discount;
    });

    setCartDiscounts(updatedData);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-4 mx-1">
        <div>
          <p className="font-semibold text-purple-gray leading-tight">{value.name}</p>
          <p className="text-[0.8rem] text-deep-gray">{discountedNameWithCountArray.join(', ')}</p>
          <p className="text-sm text-deep-pink font-semibold">
            -{getFormatPrice(totalDiscounts, currencyCode)}
            {`(${(value.rate * 100).toFixed(0)}%)`}
          </p>
        </div>
        <Select
          mode="tags"
          style={{ width: 90, height: 40 }}
          value={selectedTags}
          placeholder="수정"
          onChange={handleChange}
          options={discountedOptions}
          maxTagCount={0}
        />
      </div>
      <div className="bg-light-gray w-full h-[0.03rem]" />
    </div>
  );
}

export default CartDiscountCard;
