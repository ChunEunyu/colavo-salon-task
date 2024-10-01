import React from 'react';
import ItemCard from './ItemCard';
import { Items } from '../../types';

interface IProps {
  items: Items;
}

function ItemCardList({ items }: IProps ) {
  return (
    <div className='pt-1 px-3'>
      {Object.entries(items).map(([key, item], index) => (
        <ItemCard 
          key={index} 
          item={item} 
          itemKey={key}
        />
      ))}
    </div>
  );
}

export default ItemCardList;
