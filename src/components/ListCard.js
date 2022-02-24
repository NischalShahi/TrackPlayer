import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {THEME} from '../constants';

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 8,
    borderRadius: 5,
    borderColor: THEME.primary,
    backgroundColor: 'white',
    borderWidth: 2,
    alignSelf: 'flex-start',
    width: '45%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  title: {
    color: THEME.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 5,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: THEME.primary,
  },
  imageStyle: {
    borderRadius: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const ListCard = ({item, onPress}) => {
  const {title, cover} = item;
  const image = cover.resolutions.find(res => res.size === 250);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.buttonContainer}>
      <View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image.url,
            }}
            style={styles.imageStyle}
            width={100}
            height={100}
          />
        </View>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const HeaderComponent = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default ListCard;
