import {useDispatch, useSelector} from 'react-redux';
import {queryChange} from '../../../redux/features/products/products.slice.m';
import {productsStates} from '../../../redux/allSelector.state';
import {_commonStatesP} from '../../../types/redux/commonState.types';
import {useRef, useState} from 'react';
import Data from '../../../controllers/local-data/productData.json';
const useProductFilter = () => {
  const {
    price,
    category,
    rating,
    order: oldOrder,
    search,
  }: _commonStatesP = useSelector(productsStates);
  const [select, setSelect] = useState<Array<string>>(category);
  const priceRef = useRef<string>(price);
  const ratingRef = useRef<string>(rating);
  const dispatch = useDispatch();
  const [order, setOrder] = useState<'ascending' | 'descending'>(oldOrder);
  const categories: Array<string> = [
    ...new Set(
      Data.map(item => {
        return item.category;
      }),
    ),
  ];
  const handleSelect = (value: string) => {
    const updateArray = [...select];
    const index = updateArray.indexOf(value);
    if (index === -1) {
      // Value is not in the array, add it
      updateArray.push(value);
    } else {
      // Value is in the array, remove it
      updateArray.splice(index, 1);
    }
    setSelect(updateArray);
  };
  const handleApply = () => {
    global.showBottomSheet({flag: false});
    dispatch(
      queryChange({
        search,
        category: select,
        order,
        price: priceRef.current,
        rating: ratingRef.current,
      }),
    );
  };
  return {
    handleApply,
    handleSelect,
    categories,
    setOrder,
    ratingRef,
    priceRef,
    search,
    select,
    order,
  };
};
export default useProductFilter;
