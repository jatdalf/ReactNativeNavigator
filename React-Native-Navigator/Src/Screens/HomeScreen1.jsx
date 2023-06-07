import React, { Component } from "react";
import { View, ScrollView, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
   <View style={styles.container}>   
    <ScrollView>
      <View style={styles.content}>
        <Image style={styles.LandingImage} source={require('../../assets/FundacionEducativaSaberes.png')}/> 
        <Text>(App exclusiva para estudiantes)</Text>           
      </View>
        <View style={styles.centered}>      
          <Button style={styles.LandingButton} title="Inicio"onPress={() => navigation.navigate("Home")}/>
        </View>
    </ScrollView>
  </View>
    
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
  }
});

export default HomeScreen1;