/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import TicTacToeGame from './screens/TicTacToeGame';
import MusicPlayer from "./screens/MusicPlayer";
import ProductsList from "./screens/ProductsList"
import OtherProjects from './screens/OtherProjects';
import CurrencyConvertorScreen from './screens/CurrencyConvertorScreen';
import PasswordGeneratorScreen from './screens/PasswordGenerator';
import DiceRollScreen from './screens/DiceRollScreen';
import BackgroundChangerScreen from './screens/BackgroundChangerScreen';
import LearningComponents from './screens/LearningComponents';

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: {product: Product}
  TicTacToeGame:undefined;
  MusicPlayer:undefined;
  ProductsList:undefined;
  OtherProjects:undefined;
  CurrencyConvertorScreen:undefined;
  PasswordGeneratorScreen:undefined;
  DiceRollScreen:undefined;
  BackgroundChangerScreen:undefined;
  LearningComponents:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): React.JSX.Element {


  return (
    <>
<NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "Home Screen",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        /> 
        <Stack.Screen
        name='MusicPlayer'
        component={MusicPlayer}
        options={{
          title: "Music Player",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name='TicTacToeGame'
        component={TicTacToeGame}
        options={{
          title: "TicTacToeGame",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
         <Stack.Screen
        name='ProductsList'
        component={ProductsList}
        options={{
          title: "All Products",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name='LearningComponents'
        component={LearningComponents}
        options={{
          title: "Learning Components Functionality",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name='ProductDetails'
        component={ProductDetails}
        options={{
          title: "Trending Products",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen
        name='BackgroundChangerScreen'
        component={BackgroundChangerScreen}
        options={{
          title: "BackGround Changer",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
         <Stack.Screen
        name='OtherProjects'
        component={OtherProjects}
        options={{
          title: "Projects Others",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

      <Stack.Screen
        name='CurrencyConvertorScreen'
        component={CurrencyConvertorScreen}
        options={{
          title: "Currency Convertor",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        
      <Stack.Screen
        name='PasswordGeneratorScreen'
        component={PasswordGeneratorScreen}
        options={{
          title: "Password Generator",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />

        <Stack.Screen
        name='DiceRollScreen'
        component={DiceRollScreen}
        options={{
          title: "Dice Roll",
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>

   
    </>
  );
}


export default App;
