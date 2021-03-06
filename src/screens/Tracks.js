import {useRoute} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import TrackPlayerCard from '../components/TrackPlayerCard';
import TrackPlayer, {
  useTrackPlayerEvents,
  State,
} from 'react-native-track-player';
import trackSetup from '../utils/trackSetup';

const Tracks = () => {
  const route = useRoute();
  const tracks = route?.params?.tracks;
  const [track, setTrack] = useState();

  useEffect(() => {
    trackSetup();
    return () => {
      // destroy the process after switching the screen
      TrackPlayer.stop();
    };
  }, []);

  useTrackPlayerEvents(['playback-queue-ended'], () => {
    TrackPlayer.stop();
    setTrack();
  });

  const onResume = async () => {
    setTrack({...track, state: 'playing'});
    await TrackPlayer.play();
  };

  const onPause = async () => {
    setTrack({...track, state: 'paused'});
    await TrackPlayer.pause();
  };

  const onPlay = async (media, item) => {
    await TrackPlayer.destroy();
    setTrack({...item, state: 'playing'});
    await TrackPlayer.add({
      id: 'track',
      url: media,
      artist: 'track',
      title: 'track',
    });
    await TrackPlayer.play();
  };

  const onPressed = async item => {
    const media = item?.media?.mp3?.url;
    const state = await TrackPlayer.getState();
    if (track && track.key === item.key) {
      if (state === State.Playing) {
        onPause();
      } else if (state === State.Paused) {
        onResume();
      } else {
        onPlay(media, item);
      }
    } else {
      onPlay(media, item);
    }
  };

  return (
    <View>
      <FlatList
        style={{marginTop: 10}}
        data={tracks}
        renderItem={item => (
          <TrackPlayerCard
            item={item.item}
            onPress={() => onPressed(item.item)}
            track={track}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

export default Tracks;
