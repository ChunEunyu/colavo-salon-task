import { useEffect, useState } from 'react';
import { fetchList } from './api';
import { Data } from './types';
import { useCurrencyStore } from './stores/currencyCodeStroe';
import { useCartStore } from './stores/cartStore';
import Layout from './common/Layout';
import MenuSection from './components/cart/MenuSection';
import CartList from './components/cart/CartList';
import TotalCart from './components/cart/TotalCart';
import './App.css';

function App() {
  const [data, setData] = useState<Data | null>(null);

  const { cartItems, cartDiscounts } = useCartStore();
  const { setCurrencyCode } = useCurrencyStore();

  const fetchData = async (): Promise<void> => {
    const fetchedData = await fetchList();
    setCurrencyCode(fetchedData.currency_code);
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <MenuSection data={data} />
      <div className="h-3/4 overflow-y-auto mb-3 mt-1">
        <CartList cartItems={cartItems} cartDiscounts={cartDiscounts} />
      </div>
      <TotalCart />
    </Layout>
  );
}

export default App;
