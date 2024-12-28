import React, {useState} from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import TrackPlayer, {
    Event,
    Track,
    useTrackPlayerEvents
} from 'react-native-track-player'
import { playListData } from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import ControlCenter from '../components/ControlCenter';

import {NativeStackScreenProps} from "@react-navigation/native-stack" 
import {RootStackParamList} from '../App'  
import { SafeAreaView } from 'react-native-safe-area-context';


type HomeProps = NativeStackScreenProps<RootStackParamList, 'MusicPlayer'>


const {width} = Dimensions.get('window')

const MusicPlayer = () => {
    const [track, setTrack] = useState<Track | null>()

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackActiveTrackChanged:
                const playingTrack = await TrackPlayer.getActiveTrack()
                setTrack(playingTrack)
                break;
        
        }
    })

    const renderArtWork = () => {
        return(
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                        style={styles.albumArtImg}
                        source={{uri: track?.artwork?.toString()}}
                        />
                    )}
                </View>
            </View>
        )
    }

  return (  
    <View style={styles.container}>
     
        <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
        />

        <SongInfo track={track}/>
        <SongSlider />
        <ControlCenter />
        
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#001d23',
    },
    listArtWrapper: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    albumContainer: {
      width: 200,
      height: 200,
    },
    albumArtImg: {
      height: '100%',
      borderRadius: 4,
    },
  });
  

export default MusicPlayer