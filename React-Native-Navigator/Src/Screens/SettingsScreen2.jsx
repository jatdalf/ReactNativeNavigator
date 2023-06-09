import React from "react";
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking} from "react-native";
import { SocialIcon, withTheme } from '@rneui/themed'


const SettingsScreen2 = () => {
  let flag = false;

  const onPressImg = ()=> {
    alert ("facebook")
  };


  return (
    <View style={styles.ContactContainer}>
    <ScrollView>  
      <View style={styles.contactContent}>
        <Text style={styles.contactTitle}>Terra | Instituto de Formación Agropecuaria</Text>
      </View>
      <View style={styles.contactCenter}>
        <Text style={styles.contactText}>Daireaux 25 | Laboulaye, Córdoba</Text>
        <Text style={styles.contactText}>Teléfono : (03385) 42-1730</Text>
        <Text style={styles.contactText}>Correo electrónico : cursos@institutoterra.com.ar</Text>        
      </View>
      <View style={styles.contactContent}>
        <Text style={styles.contactText}>Redes sociales</Text>
      </View>

    
    <View style={{flexDirection: 'row', flex: 3}}>              
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/terrainstitutodeformacionagropecuaria/')}>
            <Image style={styles.conctactImage} source={require('../../assets/facebook-48.svg')}/> 
          </TouchableOpacity>               
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/terra.instituto.agropecuario/')}>
            <Image style={styles.conctactImage} source={require('../../assets/instagram-48.svg')}/> 
          </TouchableOpacity>                                 
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/Terra_Instituto')}>
            <Image style={styles.conctactImage} source={require('../../assets/twitter-48.svg')}/> 
          </TouchableOpacity>                   
        </View>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/c/TerraInstitutodeFormaci%C3%B3nAgropecuaria')}>
            <Image style={styles.conctactImage} source={require('../../assets/youtube-48.svg')}/> 
          </TouchableOpacity>                
        </View>
      </View>

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ContactContainer: {
    flex: 1,
    backgroundColor: '#0C3D1B',
    alignItems: 'strech',
    alignItems: 'center'
  },
  contactContent: {
    marginTop: 50,
    marginBottom: 40,
    flex: 2,
  },
  contactCenter: {
    marginTop: 50,
    marginBottom: 40,
    flex: 7,
  },
  contactTitle: {
    color: "#FFFFFF",
    alignItems: 'center',  
    fontWeight: '700', 
    fontSize: 18
  },
  contactText: {
    color: "#FFFFFF",
    alignItems: 'center',  
    fontWeight: '400', 
    fontSize: 14
  },
  conctactImage: {
    width: '4vw',
    height: 40,
    margin: 7
  }
});

export default SettingsScreen2;