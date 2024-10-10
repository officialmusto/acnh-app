import { StyleSheet, SafeAreaView } from 'react-native';
import Villager from './components/Villager'; // Ensure this path is correct

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Villager />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(135, 176, 240)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});