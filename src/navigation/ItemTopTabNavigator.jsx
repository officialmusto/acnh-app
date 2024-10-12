import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SongListScreen from '../screens/ItemListScreen/SongListScreen/SongListScreen'
import FossilListScreen from '../screens/ItemListScreen/FossilListScreen/FossilListScreen'
import PosterListScreen from '../screens/ItemListScreen/PosterListScreen/PosterListScreen'

const TopTab = createMaterialTopTabNavigator()

const ItemTopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Songs" component={SongListScreen} />
      <TopTab.Screen name="Fossils" component={FossilListScreen} />
      <TopTab.Screen name="Posters" component={PosterListScreen} />
    </TopTab.Navigator>
  );
};

export default ItemTopTabNavigator