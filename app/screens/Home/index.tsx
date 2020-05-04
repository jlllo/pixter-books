import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { loadRequest as loadPlaces } from '../../store/ducks/PlacesData/actions';
import { BodyContainer, Button, ButtonText, Text } from './styles';

type RootStackParamList = {
  Home: undefined;
  Books: undefined;
  Details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Books'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function Home({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());

    setTimeout(() => setLoading(false), 2000);
  }, []);

  const handlePress = () => navigation.navigate('Books');

  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView>
        <BodyContainer>
          <Text>Pixter Books</Text>
          {loading ? (
            <ActivityIndicator size='large' color='#000' />
          ) : (
            <Button onPress={handlePress}>
              <ButtonText>Books</ButtonText>
            </Button>
          )}
        </BodyContainer>
      </SafeAreaView>
    </>
  );
}
