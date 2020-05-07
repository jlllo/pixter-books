import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image, Item } from './styles';

interface PropsImageGrid {
  url: string;
  handlePress(params: any): void;
}

export default function ImageGrid({ url, handlePress }: PropsImageGrid) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Item>
        <Image
          source={{
            uri: url,
          }}
        />
      </Item>
    </TouchableOpacity>
  );
}
