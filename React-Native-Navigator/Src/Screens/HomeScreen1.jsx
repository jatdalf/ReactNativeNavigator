import React, { Component } from "react";
import { ImageBackground, View, ScrollView, Text, TouchableOpacity , Image, StyleSheet, Pressable  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
   <SafeAreaProvider>
   <View style={styles.landingContainer}>   
    <ImageBackground source={require('../../assets/silosNight.jpg')} resizeMode="cover" style={styles.landingCoverImage}>
    <ScrollView>
      <View style={styles.responsiveBox}>
        <Image style={styles.LandingTerra}  source={require('../../assets/logo-white.png')}/>                   
      </View>
      <View style={styles.centered}>
        <Text style={styles.landingTitle}>INSCRIPCIONES</Text>
        <Text style={styles.landingTitle}>ABIERTAS 2023</Text>
      </View>
        
      <View style={styles.centered}>    
      <TouchableOpacity style={styles.LandingButton} onPress={() => navigation.navigate("Catálogo")} >
        <Text  style={styles.buttonText}>{'Inicio'} </Text>
      </TouchableOpacity>  
      </View>

      <View style={styles.centered}>
        <Pressable style={styles.NotPressableButton}>
          <Text  style={styles.NotPressableText}>FORMATE EN INSTITUTO TERRA</Text>
        </Pressable>
      </View>
      

      <View style={styles.centered}>
        <View style={{position:'fixed', top: 280,}}>
        <Text  style={styles.LandingText}>
          <Text>Se parte del ecosistema productivo </Text>
          <Text style={{fontWeight: "bold"}}>más importante de</Text>
        </Text>
        <Text style={styles.LandingText}>
          <Text style={{fontWeight: "bold"}}>Argentina</Text>
          <Text>, siempre será la mejor opción para tu futuro laboral.</Text>
        </Text>
          <Text> </Text>
          <Text style={styles.LandingText}>Con esto en mente, ponemos todos nuestros esfuerzos para</Text>
        <Text style={styles.LandingText}>
          <Text>brindar </Text>
          <Text style={{fontWeight: "bold"}}>el mejor acompañamiento</Text>
          <Text> desde tu formación</Text>
        </Text>
          <Text style={styles.LandingText}>profesional hasta la inserción laboral.</Text>
          <Text> </Text>
          <Text style={styles.LandingText}>Especialízate y recorre este camino en el instituto de formación</Text>
        <Text style={styles.LandingText}>
          <Text>agropecuaria </Text>
          <Text style={{fontWeight: "bold"}}>más elegido de Argentina.</Text>        
        </Text>
        </View>
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
    alignItems: 'strech', 
    width: wp('10%'),
    height: hp('7%'),
    margin: 2,    
    position: 'fixed',
    left:  hp('7%'),
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:  hp('1%'),
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#7CB342',  
    position: 'fixed',
    top: 200,  
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
    fontWeight: '200',
    fontSize: hp('2%'),
    letterSpacing: 2,
  },
  centered: {
    alignItems: 'center',   
  }, 
  responsiveBox: {
    width: wp('99%'),
    height: hp('17%'),
    flexDirection: 'column',     
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

export default HomeScreen1;