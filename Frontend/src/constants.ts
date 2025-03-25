export const categories = ['Electric', 'Kids & Junior', 'Mountain', 'Road'];
export const headerLinks = [
  { link: '/cart', label: 'Shopping Cart' },
  { link: '/profile', label: 'Profile' },
  { link: '/logout', label: 'Logout' },
];

export interface Bike {
  name: string;
  brand: string;
  category: string;
  colour: string;
  frameSize: string;
  frameMaterial: string;
  year: number;
  price: number,
  image: string,
}