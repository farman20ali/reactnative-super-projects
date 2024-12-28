import { View, Text, SafeAreaView, StyleSheet, Pressable, FlatList, StatusBar } from 'react-native'
import React, { useState } from 'react'
// navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack" 
import {RootStackParamList} from '../App'  
import Icons from '../components/Icon'
import Snackbar from 'react-native-snackbar'
import PlayAudio from '../components/AudioPlay'


type HomeProps = NativeStackScreenProps<RootStackParamList, 'TicTacToeGame'>


export default function TicTacToeGame({navigation}: HomeProps) {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))
  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: "#FFFFFF"
      })
    }

    if (gameState[itemNumber] === 'empty') {
      gameState[itemNumber] = isCross ? 'cross': 'circle'
      setIsCross(!isCross)
    } else {
      return Snackbar.show({
        text: "Position is already filled",
        backgroundColor: "red",
        textColor: "#FFF"
      })
    }

    // checkIsWinner()
    checkingWinner();
  }

  const checkingWinner=()=>{
    let checkList=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  
    for(let index in checkList){
      let item=checkList[index]; 
      if (
        gameState[item[0]] === gameState[item[1]] &&
        gameState[item[0]] === gameState[item[2]] &&
        gameState[item[0]] !== 'empty'
      ){
        setGameWinner(`${gameState[0]} WON THE GAME! 🥳`);
      }
    }
    if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }
  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }
  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty', 0, 9))
  }

  return ( 
      <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar />
        <Text style={styles.smallText}>TicTacToeGame</Text>

        {gameWinner ? (
        <View style={[styles.playerInfo, styles.winnerInfo]}>
          <Text style={styles.winnerTxt}>{gameWinner}</Text>
        </View>
      ) : (
        <View
        style={[
          styles.playerInfo,
          isCross ? styles.playerX : styles.playerO
        ]}
        >
          <Text style={styles.gameTurnTxt}>
            Player {isCross? 'X' : 'O'}'s Turn
          </Text>
        </View>
      )}

        {/* Game Grid */}
      <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}
      renderItem={({item, index}) => (
        <Pressable
        key={index}
        style={styles.card}
        onPress={() => onChangeItem(index)}
        >
          <Icons name={item} />
        </Pressable>
      )}
      />
      <PlayAudio/>
      {/* game action */}
      <Pressable
      style={styles.gameBtn}
      onPress={reloadGame}
      >
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'reLoad the game'}
        </Text>
      </Pressable>
      </SafeAreaView>
       
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    smallText: {
        color: "#000000"
    },
      playerInfo: {
        height: 56,
    
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
        borderRadius: 4,
        paddingVertical: 8,
        marginVertical: 12,
        marginHorizontal: 14,
    
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
      },
      gameTurnTxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
      },
      playerX: {
        backgroundColor: '#38CC77',
      },
      playerO: {
        backgroundColor: '#F7CD2E',
      },
      grid: {
        margin: 12,
      },
      card: {
        height: 100,
        width: '33.33%',
    
        alignItems: 'center',
        justifyContent: 'center',
    
        borderWidth: 1,
        borderColor: '#333',
      },
      winnerInfo: {
        borderRadius: 8,
        backgroundColor: '#38CC77',
    
        shadowOpacity: 0.1,
      },
      winnerTxt: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '600',
        textTransform: 'capitalize',
      },
      gameBtn: {
        alignItems: 'center',
    
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 36,
        backgroundColor: '#8D3DAF',
      },
      gameBtnText: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '500',
      },
    });
    