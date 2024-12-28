import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

interface ImageProperties {
  heading:string,
  url:string,
  body:string,
}

export default function ImageCom({ heading,url,body }: ImageProperties) {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <Image source={{uri:url}} style={styles.card}/>
      <Text style={styles.body}>{body}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    fontSize: 24,
    color: 'black',
  },
  card:{
    height:180
  }
});
