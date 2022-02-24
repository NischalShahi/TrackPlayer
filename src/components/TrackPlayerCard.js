import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';
import { THEME } from '../constants';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 8,
    borderRadius: 5,
    backgroundColor: THEME.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {width: 30, height: 30, marginRight: 10},
  titleStyle: {
    color: 'white',
    fontSize: 16,
  },
});

const TrackPlayerCard = ({item, onPress, track}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {track?.state === 'playing' && track?.key === item?.key ? (
          <Image
            width={30}
            height={30}
            source={pauseIcon}
            style={styles.imageContainer}
          />
        ) : (
          <Image
            width={30}
            height={30}
            source={playIcon}
            style={styles.imageContainer}
          />
        )}
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.titleStyle}>
        {item.title}
      </Text>
    </View>
  );
};

export default TrackPlayerCard;
