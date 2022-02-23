import React from 'react';
import {View, Text} from 'react-native';

const ErrorView = ({errorMessage}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text>{errorMessage}</Text>
    </View>
  );
};

export default ErrorView;
