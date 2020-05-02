import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function Home({ navigation }: Props) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            <Text style={styles.text}>Pixter Books</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Details")}
            >
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#FFDD0D",
    height: "100%",
  },
  body: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
  text: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 25,
  },
  button: {
    width: "25%",
    margin: 20,
    padding: 7,
    borderRadius: 4,
    backgroundColor: "#000",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 18,
  },
});
