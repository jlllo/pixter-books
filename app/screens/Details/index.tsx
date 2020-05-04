import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation: NavigationStackProp<NavigationState, NavigationParams>;
}

export default function Details({ navigation }: Props) {
  const { params } = navigation.state;

  return (
    <>
      <StatusBar barStyle='light-content' />
      {params && (
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            style={styles.scrollView}
          >
            <View style={styles.body}>
              <Text style={styles.text}>{params.title}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FFDD0D',
    height: '100%',
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 25,
  },
});
