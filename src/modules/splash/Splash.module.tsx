import React from 'react';
import {styles} from './styles/splash.style';
import useSplash from './hooks/useSplash.hook';
import SplashContainer from '../../layouts/SplashContainer.layout';
import {Text} from 'react-native';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
const Splash = () => {
  const {} = useSplash();
  return (
    <SplashContainer containerStyle={styles.container}>
      <Text style={[typographies.interSemiBold34, {color: colors.pink}]}>
        TreanHub
      </Text>
    </SplashContainer>
  );
};
export default Splash;
