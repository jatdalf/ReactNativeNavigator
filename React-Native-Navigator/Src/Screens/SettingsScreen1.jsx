import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SettingsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.FundacionContainer}>
      
      <View style={styles.FundacionContent}>
        <Text style={styles.fundacionTitle}>FORMATE PROFESIONALMENTE</Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionTitle}> </Text>
        <Text style={styles.fundacionText}>Generamos oportunidades de formación que se adaptan a tu ritmo de vida, con propuestas que</Text>
        <Text style={styles.fundacionText}>potencian tus objetivos y orientadas al mercado actual. Todos nuestros ciclos de formación</Text>
        <Text style={styles.fundacionText}>profesional cuentan con Certificación Oficial y contenidos dinámicos, con prácticas</Text>
        <Text style={styles.fundacionText}>especializadas y acompañamiento de nuestro equipo de profesionales.</Text>
      </View>

      <View >
        <Button title="Contacto" onPress={() => navigation.navigate("Contacto")} />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  FundacionContainer: {
    flex: 1,
    backgroundColor: '#fff',
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