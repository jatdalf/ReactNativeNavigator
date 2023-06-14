import React, { Component } from "react";
import { ImageBackground, View, ScrollView, Text, TouchableOpacity , Image, StyleSheet, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen2 = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaProvider>
   <View style={styles.landingContainer}>   
    <ImageBackground source={require('../../assets/Catalogo.jpeg')} resizeMode="cover" style={styles.catCoverImage}>
    <ScrollView>
      <View  style={styles.centered}>
        <TouchableOpacity style={styles.LandingButton} onPress={() => navigation.navigate("Catálogo")} >
         <Text  style={styles.buttonText}>{'ANALISIS COMERCIAL'} </Text>
        </TouchableOpacity>  
      </View>

      <View style={styles.centered}>
        <Pressable style={styles.NotPressableButton}>
          <Text  style={styles.NotPressableText}>——————————————————————————</Text>
        </Pressable>
      </View>
      

      <View style={styles.centered2}>
        <TouchableOpacity style={styles.LandingButton} onPress={() => navigation.navigate("Catálogo")} >
         <Text  style={styles.buttonText}>{'TIPIFICACION'} </Text>
        </TouchableOpacity>  
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
  catCoverImage:{
    flex: 1,
    justifyContent: 'center',  
    width: hp('100%'),
        
  },
  LandingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:  hp('1%'),
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#7CB342',  
    position: 'fixed',   
  },
  NotPressableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:  hp('1%'),
    paddingHorizontal: 10,   
    elevation: 3,
    backgroundColor: '#0A0B0A',  
    position: 'fixed',
    top: 240,      
  },
  NotPressableText:{
    color: 'white',
    alignItems: 'center',
    fontWeight: '800',
    fontSize: hp('2%'),    
  },
  centered: {
    alignItems: 'center',   
    top:110,
  }, 
   centered2: {
    alignItems: 'center',   
    top:340,
  }, 
  responsiveBox: {
    width: wp('99%'),
    height: hp('17%'),       
    alignItems: 'left',
    
    
  },
  landingTitle:{
    color: 'white',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: hp('4%'),
  },
  buttonText:{
    color: 'white',
    alignItems: 'center',
    fontSize: hp('3%'),
    fontWeight: '400',
  },
  LandingText:{
    color: 'white',
    alignItems: 'left',
    fontSize: hp('3%'),
    fontWeight: '300',
  }
});


export default HomeScreen2;