import { StyleSheet, SafeAreaView } from 'react-native';
import VillagerList from './screens/VillagerList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VillagerList />
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