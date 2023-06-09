import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.FundacionContainer}>
    <ScrollView>
              
      <View style={styles.FundacionContent}>
        <Text style={styles.fundacionTitle}>FORMATE PROFESIONALMENTE</Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionText}>Generamos oportunidades de formación que se adaptan a tu ritmo de vida, con propuestas que</Text>
        <Text>
          <Text style={styles.fundacionText}>potencian </Text>
          <Text style={{fontWeight: "bold"}}>tus objetivos</Text>
          <Text style={styles.fundacionText}> y orientadas al mercado actual. Todos nuestros ciclos de formación</Text>
        </Text>
        <Text>
          <Text style={styles.fundacionText}>profesional cuentan con </Text>
          <Text style={{fontWeight: "bold"}}>Certificación Oficial</Text>
          <Text style={styles.fundacionText}> y contenidos dinámicos, con prácticas</Text>
        </Text>
        <Text style={styles.fundacionText}>especializadas y acompañamiento de nuestro equipo de profesionales.</Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text>
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
    backgroundColor: '#6CD348',
    alignItems: 'strech',
    alignItems: 'center'
  },
  FundacionContent: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
    flex: 2,
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
  }
});

export default SettingsScreen1;