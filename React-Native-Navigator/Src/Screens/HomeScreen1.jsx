import React, { Component } from "react";
import {  View, ScrollView, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaProvider>
   <View style={styles.container}>   
    <ScrollView>
      <View style={styles.content}>
        <Image style={styles.LandingImage} source={require('../../assets/Terra.png')}/> 
        <Text>Terra | Instituto de Formación Agropecuaria</Text>           
      </View>
        
      <View style={styles.centered}>      
        <Button style={styles.LandingButton} title="Inicio"onPress={() => navigation.navigate("Home")}/>
      </View>

      <View style={styles.SecondLandingImage}>
        <Image style={styles.LandingImage2} source={require('../../assets/FundacionEducativaSaberes.png')}/> 
      </View>
    </ScrollView>
  </View>
  </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    alignItems: 'center'
  },
  LandingImage:{
      width: '24vw',
      height: 90,
      margin: 7
  },
  LandingImage2:{
    width: '15vw',
    height: 60,
    margin: 7
},
  content: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  LandingButton: {
      height: 50,
      width: 100,
  },
  centered: {
    flex: 10,
    alignItems: 'center',   
  },
  SecondLandingImage:{
    flex:2,
    alignItems: 'center',
  }
});

export default HomeScreen1;