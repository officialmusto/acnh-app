import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SongListScreen from '../screens/ItemListScreen/SongListScreen/SongListScreen'
import FossilListScreen from '../screens/ItemListScreen/FossilListScreen/FossilListScreen'
import PosterListScreen from '../screens/ItemListScreen/PosterListScreen/PosterListScreen'

const TopTabs = createMaterialTopTabNavigator()

const ItemTopTabNavigator = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Songs" component={SongListScreen} />
      <TopTabs.Screen name="Fossils" component={FossilListScreen} />
      <TopTabs.Screen name="Posters" component={PosterListScreen} />
    </TopTabs.Navigator>
  );
};

export default ItemTopTabNavigator