import {screens} from '../../../routes/routeName.routes';
import {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import useDelayHook from '../../../helpers/hooks/useDelay.hook';

const useSplash = () => {
  const screenName = useRef(screens.home);
  const navigation = useNavigation<any>();
  useDelayHook(() => {
    initApp();
  });
  const initApp = async () => {
    await handleLocalData();
  };
  const handleLocalData = async () => {
    handleAppReadyState();
    return;
  };
  const handleAppReadyState = () => {
    handleScreenChange();
  };
  const handleScreenChange = () => {
    navigation.replace(screenName.current);
  };
  return {};
};
export default useSplash;
