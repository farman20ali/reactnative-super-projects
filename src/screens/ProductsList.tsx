import { View, Text, SafeAreaView, StyleSheet, Pressable, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack" 
import {RootStackParamList} from '../App'  


import { PRODUCTS_LIST } from '../data/contants'
import Separator from '../components/Separator'
import ProductItem from '../components/ProductItem'

type ProductListProps = NativeStackScreenProps<RootStackParamList, 'ProductsList'>


export default function ProductsList({navigation}: ProductListProps) {
   
  
  return ( 
     <View style={styles.container}> 
      <SafeAreaView style={{ flex: 1 }}> 
        <FlatList
              data={PRODUCTS_LIST}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
              renderItem={({item}) => (
                <Pressable
                onPress={() => {
                  navigation.navigate('ProductDetails', {
                    product: item
                  })
                }}
                >
                  <ProductItem product={item}/>
                </Pressable>
              )}
              />
      </SafeAreaView>
      </View>
       
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
    });
    