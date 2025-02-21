import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';

export default function ProductsLayout() {
  return (
    <View style={{ flex: 1 }}>
        <Slot />
    </View>
  );
}