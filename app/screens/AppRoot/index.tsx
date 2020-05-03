import { Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from '../Details';
import Home from '../Home';

const AppNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      headerRight: () => (
        <Button
          onPress={() => alert('This is a button!')}
          title='Info'
          color='#fff'
        />
      ),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#FFDD0D',
      headerTitleStyle: {
        fontWeight: 'regular',
      },
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: () => null,
      headerStyle: {
        backgroundColor: '#FFDD0D',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'regular',
      },
    },
  },
});

export default createAppContainer(AppNavigation);
