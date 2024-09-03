import React, {useState} from 'react';
import {_imagePreview} from './interface';
import {Image, StyleSheet, View} from 'react-native';
import BaseSkeleton from '../skeletons/BaseSkeleton.component';
import {imageLink} from '../../assets/images/link.image.asset';
import isEmpty from '../../helpers/utilities/isEmpty.utility';

const ImagePreview: React.FC<_imagePreview> = ({
  styles = {},
  source,
  resizeMode = 'cover',
  borderRadius = 0,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  let image: any = typeof source === 'object' ? {...source} : source;
  try {
    if (!isEmpty(image) && !isEmpty(image?.uri)) {
      image.uri = JSON.parse(image.uri ?? '');
    }
  } catch (e) {}
  return (
    <View style={style.relative}>
      <Image
        source={
          image?.uri ? image : Number(image) ? image : imageLink.placeholder
        }
        style={[style.image, styles]}
        resizeMode={resizeMode as any}
        onLoadEnd={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
      />
      {isLoading && (
        <View style={style.loaderView}>
          <BaseSkeleton
            height={'100%'}
            width={'100%'}
            borderRadius={borderRadius}
          />
        </View>
      )}
    </View>
  );
};

export default ImagePreview;

const style = StyleSheet.create({
  relative: {position: 'relative', overflow: 'hidden'},
  loaderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
  },
  image: {height: '100%', width: '100%'},
});
