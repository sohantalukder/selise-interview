import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import ImagePreview from '../../../components/image-preview/Index.component';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import AddIcon from '../../../assets/icons/AddIcon.assets';
import {_product} from '../../../services/types/product.type';
import {useDispatch} from 'react-redux';
import {addAction} from '../../../redux/features/cart/cart.slice.m';

const EachProduct: React.FC<{item: _product; index: number}> = ({item}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addAction(item));
  };
  return (
    <View
      style={[
        globalStyles.flexRow,
        globalStyles.widthFull,
        {
          backgroundColor: colors.pureWhite,
          ...customPadding(10, 10, 10, 10),
          borderRadius: rs(14),
        },
      ]}>
      <ImagePreview
        source={{uri: item.image}}
        styles={{height: rs(100), width: rs(100), borderRadius: rs(20)}}
      />
      <View style={globalStyles.flexShrink1}>
        <Text style={[typographies.interSemiBold14, {color: colors.black}]}>
          {item.title}
        </Text>
        <Text style={typographies.interNormal12}>{item.shortDescription}</Text>
        <Text style={[typographies.interSemiBold14, {color: colors.black}]}>
          Rating: {item.rating}
        </Text>
        <Text style={[typographies.interSemiBold14, {color: colors.black}]}>
          Price: $ {item.price}
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleAddToCart}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...customPadding(5, 5, 5, 5),
          backgroundColor: colors.pink,
          borderRadius: rs(12),
          position: 'absolute',
          bottom: 2,
          right: 5,
        }}>
        <AddIcon fill={colors.white} height={24} width={24} />
      </TouchableOpacity>
    </View>
  );
};

export default EachProduct;
