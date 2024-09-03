import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {colors} from '../../assets/styles/colors.style.asset';
interface badge {
  text: string;
  style?: ViewStyle;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>;
  textColor?: string;
  bgColor?: string;
  isLoading?: boolean;
}
const Badge: React.FC<badge> = ({
  text = '',
  style = {},
  onPress = () => {},
  textStyle = {},
  textColor,
  bgColor,
}) => {
  const styles = badgeStyles(
    textColor || colors.white,
    bgColor || colors.green,
  );
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text
        style={[
          typographies.interMedium12,
          styles.text,
          globalStyles.flexShrink1,
          textStyle,
        ]}
        numberOfLines={1}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Badge;

const badgeStyles = (textColor: string, bgColor: string) =>
  StyleSheet.create({
    container: {
      ...customPadding(2, 6, 2, 6),
      borderRadius: 100,
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: bgColor,
      alignSelf: 'flex-start',
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: textColor,
      width: '100%',
    },
  });
