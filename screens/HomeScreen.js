import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500`} >I am HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
