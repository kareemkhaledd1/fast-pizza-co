export interface MenuItemsType {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
}

export interface RouteError {
  statusText: string;
  message: string;
  data: string;
}

export interface orderItem {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: orderItem[];
}

export interface FormDataEntries {
  [key: string]: string;
  customer: string;
  phone: string;
  address: string;
}

export interface newOrder {
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  cart: orderItem[];
}

export interface Cart {
  id: string;
  orderItem: orderItem[];
}

export interface Errors {
  phone?: string;
}

export interface CartState {
  cart: {
    cart: orderItem[];
  };
}

export interface CartInitialState {
  cart: orderItem[];
}

export interface userState {
  user: {
    username: string;
    position?: Position;
    address?: string;
  };
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface UserinitialState {
  username: string;
  status: string;
  position: {};
  address: string;
  error: string;
}

export interface FetchAddressPayload {
  position: Position;
  address: string;
}
export interface Pizza {
  id: string | number;
  ingredients: string[];
}
