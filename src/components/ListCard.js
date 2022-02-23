import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#5c6496',
  },
  title: {
    color: 'white',
  },
});

const ListCard = ({item, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.buttonContainer}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ListCard;
