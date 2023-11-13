import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppNavigation from './navigation/appNavigation';

export default function App() {
  return (
    <View style={{ flex: 1}}>
      <StatusBar barStyle={"light-content"} />
      <AppNavigation />
    </View>
  );

}
