import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity,Linking } from 'react-native'
import React from 'react'


// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import FlatCards from '../components/FlatCards'
import ImageCom from '../components/ImageComponent'
import ContactList from '../components/ContactList'  


type LearningComponentsProps = NativeStackScreenProps<RootStackParamList, 'LearningComponents'>

const LearningComponents = ({ navigation }: LearningComponentsProps) => {
  const openWebsite = (url: string) => {
    Linking.openURL(url);
  }
  const url = "https://www.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=893&height=600&name=parts-url_1.webp"


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView scrollEnabled={true} style={{ backgroundColor: 'white' }}>

          <View style={[styles.container]}>

            <Text
              style={styles.heading}
              onPress={() => Alert.alert('Heading pressed!')}
            >
              Welcome to My App(click me)
            </Text>
            <Text style={styles.blueText}>
              This is a custom Text component that extends React Native's Text component.
            </Text>
          </View>
          <View style={styles.containerTouchableOpacity}>
            <TouchableOpacity onPress={() => { openWebsite(url) }}>
              <Text style={styles.card}>Touchable OPacity (click me)</Text>
            </TouchableOpacity>
          </View>

          <ImageCom url="https://www.hubspot.com/hs-fs/hubfs/parts-url_1.webp?width=893&height=600&name=parts-url_1.webp" heading='Heading(Image Component)' body="some text below the photo" />
          <FlatCards heading='FlatCards (Component)' styleProperty={{}} cards={['card1', 'card2', 'card', 'card', 'card']} />
          <FlatCards heading='Elevated (Component)' styleProperty={{ color: 'pink' }} cards={['card', 'card', 'card', 'card', 'card']} />
          <ContactList />



        </ScrollView>
      </SafeAreaView>


    </View>
  )
}

export default LearningComponents;


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

  blueText: {
    color: 'blue',
  },
  containerTouchableOpacity: {
    flex: 1,
    alignItems: 'center'
  },

  card: {
    color: 'black',
    fontSize: 20,
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    margin: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});