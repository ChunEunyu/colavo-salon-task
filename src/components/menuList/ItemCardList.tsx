import React from 'react';
import { Items } from '../../types';
import ItemCard from './ItemCard';

interface IProps {
  items: Items;
}

function ItemCardList({ items }: IProps) {
  return (
    <div className="pt-1 px-3">
      {Object.entries(items).map(([key, item], index) => (
        <ItemCard key={index} item={item} itemKey={key} />
      ))}
    </div>
  );
}

export default ItemCardList;
