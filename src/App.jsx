import { SafeAreaView } from 'react-native';

// stylesheet:
import styles from './App.styles'

import VillagerList from './screens/VillagerList/VillagerList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <VillagerList styles={styles.cardContainer} />
    </SafeAreaView>
  );
}