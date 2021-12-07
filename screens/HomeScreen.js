import React from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={{padding: 10}} >
        <Image
          style={{ width: 100, height: 100}}
          source={require('../assets/uber.png')}
          resizeMode='contain'
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
