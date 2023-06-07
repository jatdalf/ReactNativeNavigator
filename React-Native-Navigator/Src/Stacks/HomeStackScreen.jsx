import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen1 from "../screens/HomeScreen1";
import HomeScreen2 from "../screens/HomeScreen2";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
   
    <HomeStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>      
      <HomeStack.Screen name="Bienvenido" component={HomeScreen1} style={styles.centered} />
      <HomeStack.Screen name="Home" component={HomeScreen2} />
    </HomeStack.Navigator>    
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    alignItems: 'center'
  },
});

export default HomeStackScreen;