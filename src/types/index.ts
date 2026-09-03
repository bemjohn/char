export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'MAINS' | 'GRILL & SUYA' | 'SIDES & SWALLOW' | 'DRINKS';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CustomerInfo {
  fullName: string;
  deliveryAddress: string;
  specialInstructions: string;
}

export interface CartState {
  items: CartItem[];
  customerInfo: CustomerInfo;
  isOpen: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'ALL' },
  { id: 'MAINS', label: 'MAINS' },
  { id: 'GRILL & SUYA', label: 'GRILL & SUYA' },
  { id: 'SIDES & SWALLOW', label: 'SIDES & SWALLOW' },
  { id: 'DRINKS', label: 'DRINKS' },
] as const;

export type CategoryId = typeof CATEGORIES[number]['id'];