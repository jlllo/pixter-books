import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
} from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationStackProp } from 'react-navigation-stack';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import ImageGrid from '../../components/ImageGrid';
import {
  loadRequest as loadBooks,
  setIndex,
} from '../../store/ducks/BooksData/actions';
import { BooksData } from '../../store/ducks/BooksData/types';
import { loadRequest as loadPlaces } from '../../store/ducks/PlacesData/actions';
import { AppState } from '../../store/ducks/types';
import { BodyContainer } from './styles';

// type RootStackParamList = {
//   Home: undefined;
//   Details: { id: number; param: string };
// };

// type HomeScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Details'
// >;

// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface Props {
  // route: ProfileScreenRouteProp;
  // navigation: HomeScreenNavigationProp;
  navigation: NavigationStackProp<BooksData>;
}

export default function Books({ navigation }: Props) {
  const { loading, data, searchIndex } = useSelector(
    (state: AppState) => state.booksData
  );
  const [refresshing, setRefresh] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadPlaces());
    console.log('useEffect', data);
  }, []);

  const handlePress = (params: BooksData) =>
    navigation.navigate('Details', params);

  const nextPage = () => dispatch(setIndex(searchIndex + 1));

  const onRefresh = () => {
    dispatch(setIndex(0));
    dispatch(loadBooks());
  };

  const renderFooter = () => (loading ? <ActivityIndicator /> : null);

  return (
    <>
      {loading && searchIndex === 0 ? (
        <SafeAreaView>
          <AppHeader title='Pixter Books' barStyle='light-content' />
          <BodyContainer>
            <ActivityIndicator size='large' color='#000' />
          </BodyContainer>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <AppHeader title='Pixter Books' barStyle='light-content' />
          <BodyContainer>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ImageGrid
                  url={item.thumbnail}
                  handlePress={() => handlePress(item)}
                />
              )}
              keyExtractor={item => String(data.indexOf(item))}
              showsVerticalScrollIndicator
              refreshControl={
                <RefreshControl
                  enabled
                  progressBackgroundColor='#000'
                  style={{ backgroundColor: '#fff' }}
                  tintColor='#fff'
                  colors={['#fff']}
                  refreshing={loading}
                  onRefresh={onRefresh}
                />
              }
              ListFooterComponent={renderFooter}
              onEndReached={nextPage}
              onEndReachedThreshold={0.4}
              numColumns={3}
            />
          </BodyContainer>
        </SafeAreaView>
      )}
    </>
  );
}
