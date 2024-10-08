import { create } from 'zustand';
import { CurrencyCode } from '../types';

interface CurrencyState {
  currencyCode: CurrencyCode;
  setCurrencyCode: (code: CurrencyCode) => void;
}

export const useCurrencyStore = create<CurrencyState>((set) => ({
  currencyCode: '',
  setCurrencyCode: (code: string) => set({ currencyCode: code }), 
}));
