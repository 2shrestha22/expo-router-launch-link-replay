import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    Linking.getInitialURL().then((url) => console.log(`REPRO root mounted, getInitialURL=${url}`));
  }, []);

  return <Stack />;
}
