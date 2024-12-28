import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'  
import BackGroundChanger from '../components/BackGroundChanger' 

type BackgroundChangerProps = NativeStackScreenProps<RootStackParamList, 'BackgroundChangerScreen'>

const BackgroundChangerScreen = ({ navigation }: BackgroundChangerProps) => {


  return (
    <View style={styles.container}> 
    <SafeAreaView style={{ flex: 1 }}>
    <BackGroundChanger />
     </SafeAreaView>


    </View>
  )
}

export default BackgroundChangerScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  } 
});