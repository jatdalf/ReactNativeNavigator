import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SettingsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.FundacionContainer}>
    <ScrollView>
              
      <View style={styles.FundacionTitle}>
        <View>
          <Text style={styles.LeftTitle}>NUEVA MODALIDAD</Text>
          <Text > </Text>
          <Text > </Text>
          <Text style={styles.NotPressableText}>———</Text>
        
          <View style={styles.firstText}>
            <Text >
              <Text style={styles.fundacionText}>Nos adaptamos a la </Text>
              <Text style={{fontWeight: "bold"}}>nueva normalidad</Text>
              <Text style={styles.fundacionText}>, mejoramos</Text>
            </Text>
            <Text style={styles.fundacionText}>para que puedas cursar de una manera segura. Tres</Text>
            <Text>
              <Text style={styles.fundacionText}>modalidades </Text>
              <Text style={{fontWeight: "bold"}}>presencial, blend (semipresencial) y</Text>
            </Text>
            <Text style={{fontWeight: "bold"}}>online.</Text>
          </View>
          <TouchableOpacity style={styles.pressableButton} onPress={() => Linking.openURL('https://institutoterra.clientes.website/#')} >
             <Text  style={styles.buttonText}>{'>> SOLICITAR INFORMACIÓN'} </Text>
           </TouchableOpacity> 
        </View>

        <View style={{left: wp('15%')}}>
         <Image style={styles.aboutImage1} resizeMode="contain" source={require('../../assets/nmo-cursos-2-1.jpg')}/>  
        </View>
    
    </View>
   
    
    
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  FundacionContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  NotPressableText:{
    color: '#7CB342',
    alignItems: 'left',
    fontWeight: '800',
    fontSize: hp('4%'),    
    position: 'fixed',
    top: hp('30%'),
    letterSpacing: -1,
  },
  LeftTitle:{
    alignItems: 'left',  
    fontWeight: '500', 
    fontSize: hp('5%'),
    position: 'fixed',
    top: hp('23%'),
  },
  FundacionTitle:{
    alignItems: 'left',
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  firstText: {
    position: 'fixed',
    top: hp('40%'),
  },
  LandingButton: {
      height: 50,
      width: 100,
  },
  fundacionTitle: {
    alignItems: 'center',  
    fontWeight: '700', 
    fontSize: 18
  },
  fundacionText: {
    alignItems: 'center',  
    fontWeight: '400', 
    fontSize: 14
  },
  aboutImage1:{
    alignItems: 'cover', 
    width: wp('70%'),
    height: hp('70%'),
    top: hp('5%'),
  },
  buttonText:{
    color: 'white',
    alignItems: 'center',
    fontSize: hp('2.5%'),
    fontWeight: '300',
  },
  pressableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:  hp('1%'),
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#7CB342',  
    top: hp('50%'),   
  },
});

export default SettingsScreen1;