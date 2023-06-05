import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    alignItems: 'center'
  },
})

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
   <View style={{flex: 1, }}>   
      <Text>this is home 1</Text>   
    <View style={GlobalStyles.container}>      
      <Button 
        title="Go to home 2"
        onPress={() => navigation.navigate("Home2")}
      />
    </View>
    <View style={{flex: 1,}}></View>
  </View>
    
  );
};

export default HomeScreen1;