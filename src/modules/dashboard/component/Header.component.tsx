import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import InputWithIcon from '../../../components/text-input/InputWithIcon.core.component';
import FilterIcon from '../../../assets/icons/FilterIcon.assets';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import ProductFilter from '../bottom-sheet/ProductFilter.bottomSheet';
import {_commonStatesP} from '../../../types/redux/commonState.types';
import {useDispatch, useSelector} from 'react-redux';
import {productsStates} from '../../../redux/allSelector.state';
import {debounceHandler} from '../../../helpers/hooks/debounce.hook';
import {queryChange} from '../../../redux/features/products/products.slice.m';

const Header = () => {
  const {price, category, rating, order, search}: _commonStatesP =
    useSelector(productsStates);
  const dispatch = useDispatch();
  const handleSearch = (text: string) => {
    console.log(text);
    debounceHandler(
      dispatch(queryChange({search: text, category, rating, order, price})),
    );
  };
  return (
    <View style={[globalStyles.flexRow, {...customPadding(0, 20, 0, 20)}]}>
      <InputWithIcon
        placeholder="Search Here"
        onChangeText={handleSearch}
        defaultValue={search}
      />
      <TouchableOpacity
        onPress={() => {
          global.showBottomSheet({
            flag: true,
            component: ProductFilter,
          });
        }}>
        <FilterIcon fill={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
