import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import {colors} from '../../../assets/styles/colors.style.asset';
import LeftArrowIcon from '../../../assets/icons/LeftArrow.icon.asset';
import {
  customPadding,
  globalStyles,
} from '../../../assets/styles/global.style.asset';
import Badge from '../../../components/badge/Badge.c';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import InputWithIcon from '../../../components/text-input/InputWithIcon.core.component';
import CustomButton from '../../../components/button/CustomButton.component';
import useProductFilter from '../hooks/useProductFilter.hook';

const ProductFilter = () => {
  const {
    handleApply,
    handleSelect,
    categories,
    setOrder,
    ratingRef,
    priceRef,
    select,
    order,
  } = useProductFilter();
  return (
    <View style={{...customPadding(0, 20, 20, 20)}}>
      <View style={globalStyles.flexRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => global.showBottomSheet({flag: false})}
          style={{...customPadding(5, 0, 5, 5)}}>
          <LeftArrowIcon />
        </TouchableOpacity>
        <Text style={[typographies.interSemiBold16, {color: colors.black}]}>
          Product Filter
        </Text>
      </View>
      <Text style={[typographies.interMedium14, {color: colors.black}]}>
        Categories
      </Text>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 5,
          marginTop: rs(10),
        }}>
        {categories.map((item: string, index: number) => {
          return (
            <Badge
              onPress={() => handleSelect(item)}
              style={{...customPadding(10, 10, 10, 10), borderRadius: rs(4)}}
              key={index}
              textStyle={[
                typographies.interMedium14,
                {color: colors.pureWhite},
              ]}
              bgColor={select.includes(item) ? colors.pink : colors.black}
              text={item}
            />
          );
        })}
      </View>
      <View style={{marginTop: rs(10)}}>
        <InputWithIcon
          defaultValue={priceRef.current}
          label="Price"
          onChangeText={(text: string) => (priceRef.current = text)}
        />
      </View>
      <View style={{marginTop: rs(10)}}>
        <InputWithIcon
          label="Rating"
          defaultValue={ratingRef.current}
          onChangeText={(text: string) => (ratingRef.current = text)}
        />
      </View>
      <View style={{marginTop: rs(15)}}>
        <Text style={[typographies.interMedium14, {color: colors.black}]}>
          Order
        </Text>
        <View style={[globalStyles.flexRow, {marginTop: rs(10)}]}>
          <Badge
            onPress={() => setOrder('ascending')}
            style={{...customPadding(10, 10, 10, 10), borderRadius: rs(4)}}
            textStyle={[typographies.interMedium14, {color: colors.pureWhite}]}
            bgColor={order === 'ascending' ? colors.pink : colors.black}
            text={'Low to High'}
          />
          <Badge
            onPress={() => setOrder('descending')}
            style={{...customPadding(10, 10, 10, 10), borderRadius: rs(4)}}
            textStyle={[typographies.interMedium14, {color: colors.pureWhite}]}
            bgColor={order === 'descending' ? colors.pink : colors.black}
            text={'High to Low'}
          />
        </View>
      </View>
      <CustomButton
        onPress={handleApply}
        text="Apply Filter"
        style={{marginTop: rs(10)}}
      />
    </View>
  );
};

export default ProductFilter;
