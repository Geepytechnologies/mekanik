import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      {/* <Text>hello</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
