export interface IProduct {
  _id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  brand: IBrand[];
  slug: string;
  tags: string[];
  title: string;
  type: IType;
  createdAt: string;
  updatedAt: string;

}

export type IBrand = 'logitech'|'microsoft'|'elgato'|'lg'|'samsung'|'hp'|'razer';
export type IType = 'mouse'|'monitor'|'teclado'|'speaker'|'webcam'|'microfono';

