import {_product, _productList} from '../../types/product.type';
import data from '../../../controllers/local-data/productData.json';
import isEmpty from '../../../helpers/utilities/isEmpty.utility';
class ProductsServiceClass {
  async list(payload: _productList) {
    const {
      search = '',
      page = 1,
      perPage = 10,
      category = [],
      price = null,
      rating = null,
      order = 'descending',
    } = payload || {};
    // Paginate products
    const paginate = (products: Array<_product>) => {
      return products.slice((page - 1) * perPage, page * perPage);
    };
    // Filter and sort products
    const processProducts = (products: Array<_product>) => {
      return products
        .filter(
          product =>
            (isEmpty(category) || category.includes(product.category)) &&
            (!price ||
              (order === 'ascending'
                ? product.price <= price
                : product.price >= price)) &&
            (!rating ||
              (order === 'ascending'
                ? product.rating <= rating
                : product.rating >= rating)) &&
            (search
              ? product.title.toLowerCase().includes(search.toLowerCase())
              : true),
        )
        .sort((a, b) => {
          if (order === 'ascending') {
            return a.price - b.price || b.rating - a.rating;
          } else {
            return b.price - a.price || b.rating - a.rating;
          }
        });
    };

    // Get search results
    const searchResult = () => {
      const filteredAndSortedProducts = processProducts(data);
      return paginate(filteredAndSortedProducts);
    };

    const result = searchResult();
    return result;
  }
}

const ProductsService = new ProductsServiceClass();
export default ProductsService;
