import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import CurrencyConvertor from '../components/CurrencyConvertor' 

type CurrencyConvertorProps = NativeStackScreenProps<RootStackParamList, 'CurrencyConvertorScreen'>

const CurrencyConvertorScreen = ({ navigation }: CurrencyConvertorProps) => {


  return (
    <View style={styles.container}>
      <CurrencyConvertor />

    </View>
  )
}

export default CurrencyConvertorScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});