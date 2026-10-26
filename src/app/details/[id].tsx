import { router, useLocalSearchParams } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Details() {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(`REPRO details mounted id=${id}`);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text testID="details">Details {id}</Text>
      <Button title="Back to home" onPress={() => router.dismissTo('/')} />
    </View>
  );
}
