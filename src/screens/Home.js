import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, FlatList} from 'react-native';
import usePrograms from '../hooks/usePrograms';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import ListCard, {HeaderComponent} from '../components/ListCard';

const Home = () => {
  const navigation = useNavigation();
  const {data, error, isFetching, refetch} = usePrograms();
  const programs = data?.programs;

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView errorMessage={'OPPS!! SOMETHING WENT WRONG!'} />;
  }

  console.log("programs", programs);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={programs}
        onRefresh={() => refetch()}
        refreshing={isFetching}
        numColumns={2}
        renderItem={item => (
          <ListCard
            item={item.item}
            onPress={() =>
              navigation.navigate('Tracks', {
                tracks: item?.item?.tracks,
              })
            }
          />
        )}
        ListHeaderComponent={() => <HeaderComponent title={'Programs'} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
