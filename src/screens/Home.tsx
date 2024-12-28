import { ActivityIndicator, Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack" 
import {RootStackParamList} from '../App'  
import { addTrack, setupPlayer } from '../../musicPlayerServices'

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home = ({navigation}: HomeProps) => { 
  const [isPlayerReady, setIsPaylerReady] = useState(false)

  async function setup(){
    let isSetup = await setupPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPaylerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}> 
      
     
      <SafeAreaView style={{ flex: 1 }}> 
      <Button
      title='Go to Learn Components'
      
      onPress={() => navigation.navigate("LearningComponents")}
      />
      
       <Button
      title='Go to Music Player'
      onPress={() => navigation.navigate("MusicPlayer")}
      />
      <Button
      title='Go to TicTacToeGame'
      
      onPress={() => navigation.navigate("TicTacToeGame")}
      />
      <Button
      title='Go to Products List'
      
      onPress={() => navigation.navigate("ProductsList")}
      />

      <Button
      title='Go to  Currency Convertor'
      
      onPress={() => navigation.navigate("CurrencyConvertorScreen")}
      />
      
      <Button
      title='Go to  Password Generator'
      
      onPress={() => navigation.navigate("PasswordGeneratorScreen")}
      />
      <Button
      title='Go to Dice Roll'
      
      onPress={() => navigation.navigate("DiceRollScreen")}
      />
       <Button
      title='Go to Background Changer'
      
      onPress={() => navigation.navigate("BackgroundChangerScreen")}
      />
         
          <Button
      title='Go to Other Projects'
      
      onPress={() => navigation.navigate("OtherProjects")}
      />
      </SafeAreaView>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    },
    button: {
      backgroundColor: '#4CAF50', // Green color
      borderRadius: 5,
      padding: 10,
      alignItems: 'center', 
      justifyContent: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
})