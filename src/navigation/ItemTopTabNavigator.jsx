import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SongListScreen from '../screens/ItemListScreen/SongListScreen/SongListScreen'
import FossilListScreen from '../screens/ItemListScreen/FossilListScreen/FossilListScreen'
import ArtworkListScreen from '../screens/ItemListScreen/ArtworkListScreen/ArtworkListScreen'

const TopTabs = createMaterialTopTabNavigator()

const ItemTopTabNavigator = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Songs" component={SongListScreen} />
      <TopTabs.Screen name="Fossils" component={FossilListScreen} />
      <TopTabs.Screen name="Artwork" component={ArtworkListScreen} />
    </TopTabs.Navigator>
  );
};

export default ItemTopTabNavigator