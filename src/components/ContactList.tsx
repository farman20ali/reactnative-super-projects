import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function ContactList() {
  const contacts = [{
    name: "farman",
    age: 21
  }, {
    name: "ali",
    age: 23
  }, {
    name: "ujjan",
    age: 24
  }]
  return (
    <View>
      <Text style={styles.heading}>LIST ITERATION (COMPONENT)</Text>
      <View style={styles.container}>
        {
          contacts.map((element, index) => {
            return (
              <View key={index} style={styles.container}>
                
                <Text style={[styles.card]}> name:{element.name} age:{element.age}</Text>
              </View>
            )
          })
        }

        <Text style={styles.heading}>END</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },

  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    color: 'black',
    fontSize: 20,
    width: 200,
    height: 200,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    margin: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});
