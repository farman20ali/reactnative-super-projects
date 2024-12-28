import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App' 

type otherProjectsProps = NativeStackScreenProps<RootStackParamList, 'OtherProjects'>

const OtherProjects = ({ navigation }: otherProjectsProps) => {


  return (
    <View style={styles.container}> 
    <SafeAreaView style={{ flex: 1 }}>  
      <Text style={styles.heading}>No Project Yet</Text>
     </SafeAreaView>

    </View>
  )
}

export default OtherProjects;


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
  }
});