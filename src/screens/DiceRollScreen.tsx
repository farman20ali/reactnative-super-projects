import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import DiceRoll from '../components/DiceRoll' 

type DiceRollScreenProps = NativeStackScreenProps<RootStackParamList, 'DiceRollScreen'>

const DiceRollScreen = ({ navigation }: DiceRollScreenProps) => {


  return (
    <View style={styles.container}> 
    <SafeAreaView style={{ flex: 1 }}>
    <DiceRoll />
     </SafeAreaView>

    </View>
  )
}

export default DiceRollScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    fontSize: 16,
    color: 'white',
  },
  whiteText: {
    color: 'yellow',
  },

  blacText: {
    color: 'blue',
  }
});