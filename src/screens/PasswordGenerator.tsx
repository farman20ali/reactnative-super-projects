import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App' 
import PasswordGenerator from '../components/PasswordGenerator'

type PasswordGeneratorProps = NativeStackScreenProps<RootStackParamList, 'PasswordGeneratorScreen'>

const PasswordGeneratorScreen = ({ navigation }: PasswordGeneratorProps) => {


  return (
    <View style={styles.container}> 
    <SafeAreaView style={{ flex: 1 }}>
     <PasswordGenerator />
     </SafeAreaView>
    </View>
  )
}

export default PasswordGeneratorScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});