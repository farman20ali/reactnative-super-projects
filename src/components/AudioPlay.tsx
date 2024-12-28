import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sound from 'react-native-sound'
import dingsound from '../../assets/dingsound.mp3'
import Icons from './Icon';

const PlayAudio = () => {
    
Sound.setCategory('Playback');


var ding = new Sound(dingsound, Sound.MAIN_BUNDLE, (error) => {
if (error) {
    // console.log('failed to load the sound', error);
    return;
  }
  // if loaded successfully
//   console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());

});
  useEffect(() => {
    ding.setVolume(1);
    return () => {
      ding.release();
    };
  }, []);
  const playPause = () => {
    ding.play(success => {
      if (success) {
        // console.log('successfully finished playing');
      } else {
        // console.log('playback failed due to audio decoding errors');
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={playPause}>
        <Icons name={'circle'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
});
export default PlayAudio;