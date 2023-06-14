import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Image } from "react-native";
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
        </View>
        

        <Text style={styles.firstText}>
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
      <View>

      </View>
        <Image style={styles.aboutImage1}  source={require('../../assets/nmo-cursos-2-1.jpg')}/>  
      <View >
        <Button title="Contacto" onPress={() => navigation.navigate("Contacto")} />
      </View>
    
    </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  FundacionContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'strech',
    alignItems: 'center'
  },
  NotPressableText:{
    color: '#7CB342',
    alignItems: 'left',
    fontWeight: '800',
    fontSize: hp('4%'),    
    position: 'fixed',
    top: hp('32%'),
    letterSpacing: -1,
  },
  LeftTitle:{
    alignItems: 'left',  
    fontWeight: '500', 
    fontSize: hp('5%'),
    position: 'fixed',
    top: hp('25%'),
  },
  FundacionTitle:{
    alignItems: 'left',
    flexDirection: 'column', 
    justify: 'flex'
  },
  firstText: {
    position: 'fixed',
    top: hp('45%'),
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
    alignItems: 'strech', 
    width: wp('40%'),
    height: hp('40%'),
  },
});

export default SettingsScreen1;