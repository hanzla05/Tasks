import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const TrackPlayerExample = () => {
  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: 'trackId',
        url: require('../../assets/sounds/Nasheed.mp3'),
        title: 'Track Title',
        artist: 'Track Artist'
      });
    };

    setupPlayer();

  }, []);

  const playTrack = () => {
    TrackPlayer.play();
  };

  const pauseTrack = () => {
    TrackPlayer.pause();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Play" onPress={playTrack} />
      <Button title="Pause" onPress={pauseTrack} />
    </View>
  );
};

export default TrackPlayerExample;
