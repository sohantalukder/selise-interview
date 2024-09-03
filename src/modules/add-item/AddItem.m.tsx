import {ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import Container from '../../layouts/Container.layout';
import InputWithIcon from '../../components/text-input/InputWithIcon.core.component';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import CustomButton from '../../components/button/CustomButton.component';
import useAddItem from './hooks/useAddItem.hook';

const AddItem = () => {
  const {handleAdd, handleChange, values} = useAddItem();
  return (
    <Container ph={20}>
      <KeyboardAvoidingView
        style={globalStyles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{gap: rs(20)}}>
          <InputWithIcon
            placeholder="Product Title"
            name={'title'}
            defaultValue={values.current.title}
            onChangeText={handleChange}
            label="Product Title"
          />
          <InputWithIcon
            placeholder="Product Description"
            name={'shortDescription'}
            defaultValue={values.current.shortDescription}
            onChangeText={handleChange}
            label="Product Description"
          />
          <InputWithIcon
            placeholder="Product Url"
            name={'image'}
            defaultValue={values.current.image}
            onChangeText={handleChange}
            label="Image Url"
            inputProps={{inputMode: 'url'}}
          />
          <InputWithIcon
            placeholder="Price"
            name={'price'}
            defaultValue={values.current.price}
            inputProps={{inputMode: 'decimal'}}
            onChangeText={handleChange}
            label="Product Price"
          />
          <InputWithIcon
            placeholder="Product Category"
            name={'category'}
            defaultValue={values.current.category}
            onChangeText={handleChange}
            label="Product Category"
          />
        </ScrollView>
        <CustomButton
          onPress={handleAdd}
          style={{marginBottom: rs(20)}}
          text="Add Product"
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default AddItem;
