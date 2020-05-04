import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  image: {
    width: 100,
    height: 130,
  },
});

interface PropsImageGrid {
  url: string;
  handlePress(params: any): void;
}

export default function ImageGrid({ url, handlePress }: PropsImageGrid) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}
