export function getFormatPrice(price: number, currencyCode: string): string {
  let formattedPrice = '';

  if (currencyCode === 'KRW') {
    const formatter = new Intl.NumberFormat('ko-KR', {
      style: 'decimal',
    });

    formattedPrice = `${formatter.format(price)}원`;
  } else if (currencyCode === 'USD') {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
    });

    formattedPrice = `${formatter.format(price)}`;
  } else {
    const formatter = new Intl.NumberFormat(undefined, {
      style: 'decimal',
    });

    formattedPrice = formatter.format(price);
  }

  return formattedPrice;
}
