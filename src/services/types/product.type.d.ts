interface _productList {
  search: string;
  page: number;
  perPage: number;
  price?: number;
  rating?: number;
  category?: Array<string>;
  order: 'descending' | 'ascending';
}
interface _product {
  id: number;
  image: string;
  title: string;
  shortDescription: string;
  price: number;
  category: string;
  rating: number;
  quantity: number;
}

export type {_productList, _product};
