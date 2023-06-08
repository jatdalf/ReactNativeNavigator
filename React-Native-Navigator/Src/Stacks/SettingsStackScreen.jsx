import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen1 from "../screens/SettingsScreen1";
import SettingsScreen2 from "../screens/SettingsScreen2";

const SettingsStackScreen = () => {
  const SettingsStack = createNativeStackNavigator();
  return (
    <SettingsStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <SettingsStack.Screen name="FUNDACION" component={SettingsScreen1} />
      <SettingsStack.Screen name="Contacto" component={SettingsScreen2} />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;