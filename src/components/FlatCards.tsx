import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

interface FlatCardsProps {
  heading: string; // Heading of the cards section
  styleProperty: Object,
  cards: string[]; // Array of card texts
}

export default function FlatCards({ heading,styleProperty, cards }: FlatCardsProps) {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {cards.map((cardText, index) => (
            <Text
              key={index}
              style={[
                styles.card,
                { backgroundColor: getColor(index)},
                styleProperty // Dynamically set background color
              ]}
            >
              {cardText}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

// Utility function to dynamically set card background colors based on index
const getColor = (index: number) => {
  const colors = ['red', 'blue', 'yellow', 'green', 'orange'];
  return colors[index % colors.length];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    margin: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
