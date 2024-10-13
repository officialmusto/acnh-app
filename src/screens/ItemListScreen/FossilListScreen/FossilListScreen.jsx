import { Text, View, SafeAreaView, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getFossils } from '../../../utils/api-calls'
import styles from '../../ItemListScreen/FossilListScreen/FossilListScreen.styles'
import Fossil from '../../../components/Fossil/Fossil'

const FossilListScreen = () => {
  const [fossils, setFossils] = useState([])
  const [loading, setLoading] = useState([])
  

  useEffect(() => {
    getFossils()
      .then(FossilData => {
        setFossils(FossilData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching fossils:", error)
        setLoading(false)
      })
  }, [])

  return (
    <SafeAreaView>
        <View style={styles.container}>
          {loading ? (
          <ActivityIndicator size="large" color="#F3E0C0" />
          ) : (
          <FlatList
            data={fossils}
            renderItem={({ item }) => <Fossil fossil={item}/>}
            keyExtractor={(item) => item.name}
            />
          )}
      </View>
    </SafeAreaView>
  )
}

export default FossilListScreen