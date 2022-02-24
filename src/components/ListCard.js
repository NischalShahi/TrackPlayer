import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 8,
    borderRadius: 5,
    backgroundColor: '#5c6496',
    minHeight: 50,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5c6496',
  },
});

const ListCard = ({item, onPress}) => {
  const {title} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.buttonContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
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
