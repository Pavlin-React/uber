import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

let data = [
  {
    id: '123',
    title: 'get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
]

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions
