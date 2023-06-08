import React, { Component }  from "react";
import {View, Text, Button, StyleSheet, ScrollView, Image} from "react-native";

const HomeScreen2 = () => {
  return (
    <View >
      <ScrollView>
        <View style={styles.HomeContent}>
         <Text >Aqui se visualizaran las imagenes</Text>
        </View>

        <View style={styles.BoxContainer}>
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
        </View>
 
        <View style={styles.BoxContainer}>
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
        </View>

        <View style={styles.BoxContainer}>
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
          <Image style={styles.HomeImage} source={require('../../assets/test.png')}/> 
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: '#D7D0D0',   
    alignItems: 'center'
  },
  HomeContent: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40
  },
  BoxContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  HomeBox: {
      height: 100,
      width: 100,
      color: '#0FECB1',
      marginBottom: 10,      
  },  
  HomeImage:{
    height: 100,
    width: 100,
    margin: 'auto',    
  }
});



export default HomeScreen2;