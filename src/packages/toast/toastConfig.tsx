import {BaseToast, ErrorToast, ToastProps} from 'react-native-toast-message';
import {colors} from '../../assets/styles/colors.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customPadding} from '../../assets/styles/global.style.asset';
import {StyleSheet} from 'react-native';
import React from 'react';
const toastConfig = {
  success: (props: ToastProps) => (
    <BaseToast
      {...props}
      style={{
        ...styles.style,
        backgroundColor: colors.green,
      }}
      contentContainerStyle={{...customPadding(5, 10, 5, 10)}}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{
        ...styles.style,
        backgroundColor: colors.pink1,
      }}
      contentContainerStyle={{...customPadding(5, 10, 5, 10)}}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
  info: (props: ToastProps) => (
    <ErrorToast
      {...props}
      style={{
        ...styles.style,
        backgroundColor: colors.black,
      }}
      contentContainerStyle={{...customPadding(5, 10, 5, 10)}}
      text1Style={styles.text1}
      text2Style={styles.text2}
      text2NumberOfLines={2}
      text1NumberOfLines={2}
    />
  ),
};
export default toastConfig;
const styles = StyleSheet.create({
  style: {
    borderLeftColor: colors.transparent,
    ...customPadding(0, 10, 0, 10),
    maxHeight: 50,
    borderRadius: 100,
  },
  text1: {
    ...typographies.interSemiBold16,
    color: colors.white,
    textAlign: 'center',
  },
  text2: {
    ...typographies.interMedium14,
    color: colors.white,
    textAlign: 'center',
  },
});
