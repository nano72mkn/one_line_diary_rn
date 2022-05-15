import React, { useCallback, useEffect, useRef, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ExpoSplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { MainStackParamList } from 'src/roots/MainRoot';

type Props = NativeStackScreenProps<MainStackParamList, 'Splash'>;

export const SplashScreen: React.FC<Props> = ({ children, navigation }) => {
  const animation = useRef(null);
  const [isAppReady, setIsAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await ExpoSplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsAppReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await ExpoSplashScreen.hideAsync();
      setTimeout(() => setAnimationComplete(true), 3000);
    }
  }, [isAppReady]);

  useEffect(() => {
    if (!isSplashAnimationComplete) return;
    navigation.push('Main');
  }, [isSplashAnimationComplete]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
      onLayout={onLayoutRootView}
    >
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#fff',
        }}
        source={require('../../lottie/splash.json')}
      />
      {children}
    </View>
  );
};
