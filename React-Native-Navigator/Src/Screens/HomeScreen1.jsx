import React, { Component } from "react";
import { ImageBackground, View, ScrollView, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaProvider>
   <View style={styles.landingContainer}>   
    <ImageBackground tintColor={'rgba(0,0,0,0.2)'}  source={require('../../assets/silos.jpg')} resizeMode="cover" style={styles.landingCoverImage}>
    <ScrollView>
      <View>
        <Image style={styles.LandingTerra} source={require('../../assets/logo-white.png')}/> 
        <Text>Terra | Instituto de Formación Agropecuaria</Text>           
      </View>
        
      <View style={styles.centered}>      
        <Button style={styles.LandingButton} title="Inicio"onPress={() => navigation.navigate("Home")}/>
      </View>

      <View style={styles.SecondLandingImage}>
        <Image style={styles.LandingImage2} source={require('../../assets/FundacionEducativaSaberes.png')}/> 
      </View>
    </ScrollView>
    </ImageBackground>
  </View>
  </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    alignItems: 'strech',
    alignItems: 'center'
  },
  LandingTerra:{
    width: '7vw',
    height: 40,
    margin: 2,      
  },
  landingCoverImage:{
    flex: 1,
    justifyContent: 'center',  
  },
  LandingImage2:{
    width: '15vw',
    height: 60,
    margin: 7,
    opacity: 1
  },
  content: {
    alignItems: 'left',
    marginTop: 30,
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