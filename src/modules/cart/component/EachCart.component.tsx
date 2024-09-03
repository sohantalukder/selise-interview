import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {_product} from '../../../services/types/product.type';
import ImagePreview from '../../../components/image-preview/Index.component';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import DeleteIcon from '../../../assets/icons/DeleteIcon.assets';
import {colors} from '../../../assets/styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {useDispatch} from 'react-redux';
import {deleteAction} from '../../../redux/features/cart/cart.slice.m';

const EachCart: React.FC<{item: _product; index: number}> = ({item, index}) => {
  const dispatch = useDispatch();
  return (
    <View style={globalStyles.flexRow}>
      <ImagePreview
        source={{uri: item.image}}
        styles={{height: rs(70), width: rs(70)}}
      />
      <View style={[globalStyles.rowBetween, globalStyles.flexGrow1]}>
        <View style={globalStyles.flexShrink1}>
          <Text style={[typographies.interSemiBold14, {color: colors.black}]}>
            {item.title}
          </Text>
          <Text style={[typographies.interSemiBold14, {color: colors.black}]}>
            Price: {item.price.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(deleteAction({index}))}
          style={{...customPadding(5, 5, 5, 5)}}>
          <DeleteIcon fill={colors.pink} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EachCart;
