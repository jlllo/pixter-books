import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import AppHeader from '../../components/AppHeader';
import {
  HeaderContainerLeft,
  HeaderContainerRight,
  SearchInputContainer,
  Title,
  TitleContainer,
} from '../../components/AppHeader/styles';
import ImageGrid from '../../components/ImageGrid';
import {
  loadRequest as loadBooks,
  setIndex,
  setLoading,
  setSearch as actionSearch,
} from '../../store/ducks/BooksData/actions';
import { BooksData } from '../../store/ducks/BooksData/types';
import { loadRequest as loadPlaces } from '../../store/ducks/PlacesData/actions';
import { AppState } from '../../store/ducks/types';
import { BooksScreenNavigationProp, BooksScreenRouteProp } from '../../types';
import {
  BodyContainer,
  FooterLoadingContainer,
  LoadingContainer,
  NewNotifications,
  NotificationsButton,
} from './styles';

interface Props {
  route: BooksScreenRouteProp;
  navigation: BooksScreenNavigationProp;
}

const WAIT_INTERVAL = 250;
var timer: any;

export default function Books({ navigation }: Props) {
  const { loading, data, totalItems, startIndex, maxResults } = useSelector(
    (state: AppState) => state.booksData
  );
  const [hasSearch, setHasSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [loadingMore, setLoadingMore] = useState(false);
  const dispatch = useDispatch();

  const searchBooks = (value: string) => dispatch(actionSearch(value));

  const handleChange = (value: string) => {
    clearTimeout(timer);
    setSearch(value);
    if (value) {
      timer = setTimeout(() => {
        searchBooks(value);
        dispatch(setLoading());
      }, WAIT_INTERVAL);
    }
  };

  const setFocus = (search: SearchBar | null) => search && search.focus();

  const handleNavSearchAction = () => {
    setHasSearch(!hasSearch);
    setSearch('');
  };

  const goToComments = () => {
    hasSearch && handleNavSearchAction();

    navigation.navigate('Notifications');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TitleContainer>
          <Title>Google Books</Title>
        </TitleContainer>
      ),
      headerLeft: () => (
        <HeaderContainerLeft>
          <TouchableOpacity onPress={() => goToComments()}>
            <NotificationsButton>
              <FaIcon size={25} name='bell-o' color='#000' />
            </NotificationsButton>

            <NewNotifications />
          </TouchableOpacity>
        </HeaderContainerLeft>
      ),
      headerRight: () => (
        <HeaderContainerRight>
          <TouchableOpacity onPress={() => handleNavSearchAction()}>
            <Icon size={30} name='search' color='#000' />
          </TouchableOpacity>
        </HeaderContainerRight>
      ),
      headerStyle: {
        backgroundColor: '#FFDD0D',
        elevation: 0,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation, hasSearch]);

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadPlaces());
  }, []);

  const handlePress = (params: BooksData) =>
    navigation.navigate('Details', params);

  const nextPage = () => {
    if (!loading) {
      if (startIndex + maxResults < totalItems) {
        dispatch(setIndex(startIndex + maxResults));
        setLoadingMore(true);
      } else if (startIndex < totalItems) {
        dispatch(setIndex(totalItems));
      } else {
        setLoadingMore(false);
      }
    }
  };

  const onRefresh = () => {
    dispatch(setIndex(0));
    dispatch(loadBooks());
  };

  const renderFooter = () =>
    !loading &&
    loadingMore && (
      <FooterLoadingContainer>
        <ActivityIndicator size='small' color='#000' />
      </FooterLoadingContainer>
    );

  return (
    <>
      {loading && startIndex === 0 ? (
        <SafeAreaView>
          <AppHeader barStyle='dark-content' backgroundColor='#ffdd0d' />
          <BodyContainer>
            <LoadingContainer>
              <ActivityIndicator size='large' color='#000' />
            </LoadingContainer>
          </BodyContainer>
        </SafeAreaView>
      ) : (
        <SafeAreaView>
          <AppHeader barStyle='dark-content' backgroundColor='#ffdd0d' />
          <BodyContainer>
            <FlatList
              data={data}
              onScroll={() => hasSearch && handleNavSearchAction()}
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
              onEndReached={nextPage}
              onEndReachedThreshold={0.3}
              numColumns={3}
              ListFooterComponent={renderFooter}
            />
          </BodyContainer>
        </SafeAreaView>
      )}
      {hasSearch && (
        <SearchInputContainer>
          <KeyboardAwareScrollView>
            <SearchBar
              ref={search => setFocus(search)}
              showLoading={false}
              placeholder='Search books...'
              onChangeText={handleChange}
              value={search}
              lightTheme={true}
              placeholderTextColor='#000'
              containerStyle={{
                justifyContent: 'center',
                borderTopWidth: 0,
                borderBottomWidth: 0,
                padding: 0,
                backgroundColor: '#ebebeb',
                borderRadius: 50,
                width: '100%',
              }}
              inputContainerStyle={{
                backgroundColor: '#ebebeb',
                borderWidth: 0,
                borderBottomWidth: 0,
                padding: 0,
                borderRadius: 50,
                width: '100%',
              }}
              inputStyle={{
                fontSize: 15,
                color: '#000',
                backgroundColor: '#ebebeb',
                borderRadius: 50,
              }}
              searchIcon={{ color: '#000', margin: 10 }}
              cancelIcon={{ color: '#000' }}
              iconStyle={{ color: '#000' }}
            />
          </KeyboardAwareScrollView>
        </SearchInputContainer>
      )}
    </>
  );
}
