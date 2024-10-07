import { create } from "zustand";

type TOpenModal = {
  openBid: boolean;
  setOpenBid: (t: boolean) => void;
};

type Product = {
  username: string;
  email: string;
  amount: number;
  product: string;
};

interface TProduct {
  order: Product;
  addOrder: (value: string | number, key: string) => void;
}

export const openModal = create<TOpenModal>((set) => ({
  openBid: false,
  setOpenBid: (value) => set(() => ({ openBid: value })),
}));

export const productSlice = create<TProduct>((set) => ({
  order: { username: "", email: "", amount: 0, product: "" },
  addOrder: (value, key) =>
    set((state: any) => ({ order: { ...state.order, [key]: value } })),
}));
