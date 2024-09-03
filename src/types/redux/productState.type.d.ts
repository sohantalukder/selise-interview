import {_product} from '../../services/types/product.type';

interface productsInitialState {
  list: Array<_product>;
  isLoading: boolean;
  page: number;
  perPage: number;
  hasMore: boolean;
  isLoadingMore: boolean;
  refreshing: boolean;
  query: string;
  hasInfiniteScroll: boolean;
  firstRender: boolean;
  price: number | null;
  category: string;
  rating: number | null;
  order: 'descending' | 'ascending';
  search: string;
}
