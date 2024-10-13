import { Text, SafeAreaView, View, FlatList, ActivityIndicator} from 'react-native'
import React, { useState, useEffect } from 'react'
import { getBugs } from '../../../utils/api-calls'
import styles from '../BugListScreen/BugListScreen.styles'
import Bug from '../../../components/Bug/Bug'

const BugListScreen = () => {
  const [bugs, setBugs] = useState([])
  const [loading, setLoading] = useState([])
  

  useEffect(() => {
    getBugs()
      .then(BugData => {
        setBugs(BugData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching bugs:", error)
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
            data={bugs}
            renderItem={({ item }) => <Bug bug={item}/>}
            keyExtractor={(item) => item.name}
            />
          )}
      </View>
    </SafeAreaView>
  )
}

export default BugListScreen