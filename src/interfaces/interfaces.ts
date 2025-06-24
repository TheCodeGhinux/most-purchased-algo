
export interface Transaction {
  itemId: string;
  quantity?: number;
  price?: number;
}

export interface ItemCount {
  itemId: string;
  totalQuantity: number;
}
