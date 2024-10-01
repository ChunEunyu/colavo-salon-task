import { Items, CartDiscountsType } from "../types";

/** 
 * 할인이 적용되지 않은 전체 가격을 계산
 */
export function getTotalPrice(items: Items[]): number {
  return items.reduce((sum, item) => {
    const product = Object.values(item)[0];
    return sum + (product.count * product.price);
  }, 0);
}

/**
 * 각 discount 객체에 따라 할인이 적용된 가격을 계산
 */
export function getDiscountedPrice(items: Items[], discounts: CartDiscountsType): number {
  let totalDiscount = 0;
  
  discounts.forEach(discount => {
    const discountValue = Object.values(discount)[0]; // 할인 정보
  
    discountValue.list.forEach(itemKey => {
    // items 배열에서 해당 itemKey에 해당하는 item을 찾아 할인 적용
    const item = items.find(item => Object.keys(item)[0] === itemKey);
    if (item) {
      const product = Object.values(item)[0];
      const itemTotal = product.count * product.price;
      totalDiscount += itemTotal * discountValue.rate;
    }
    });
  });
  
  return totalDiscount;
}

/**
 * 최종 가격 = 전체 가격 - 할인 금액
 */
export function getFinalPrice(items: Items[], discounts: CartDiscountsType): number {
  const totalPrice = getTotalPrice(items); // 할인이 적용되지 않은 총 가격
  const totalDiscount = getDiscountedPrice(items, discounts); // 총 할인 금액
  return totalPrice - totalDiscount; // 최종 가격
}