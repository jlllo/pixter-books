import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Image } from '../../components/ImageGrid/styles';

const ScreenHeight =
  Dimensions.get('window').height - Constants.statusBarHeight;

const imageWidth = (Dimensions.get('window').width - 110) / 2.7;
const imageHeight = imageWidth * 1.322;

export const MainContainer = styled.View`
  background-color: #ffdd0d;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: ${ScreenHeight}px;
  width: ${Dimensions.get('window').width}px;
`;

export const HeadContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  width: ${Dimensions.get('window').width}px;
  height: ${ScreenHeight * 0.3}px;
`;

export const LeftBookHead = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffdd0d;
  width: 36%;
  height: 100%;
  padding: 3px 14px 68px 17px;
`;

export const RightBookHead = styled.View`
  background-color: #ffdd0d;
  width: 64%;
`;

export const HeadContent = styled.View`
  height: ${ScreenHeight * 0.3}px;
  padding: 0px 17px 10px 0px;
`;

export const BodyContainer = styled.View`
  background-color: #fff;
  padding: 18px;
  height: ${ScreenHeight * 0.65}px;
`;

export const PagesInfo = styled.View`
  align-items: center;
  justify-content: center;
  height: 60px;
`;

export const ActionContent = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const BottomHeadContent = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 31%;
`;

// WRAPPERS

export const ImageWraper = styled.View`
  align-items: center;
  justify-content: center;
  elevation: 25;
  width: ${imageWidth}px;
  height: ${imageHeight}px;
  border-radius: 2px;
`;

// COMPONENTS

export const ImageShaddow = styled(Image)``;

export const TitleContent = styled.View``;

export const TextTitle = styled.Text`
  flex-wrap: wrap;
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #2c2605;
  width: 100%;
  text-align: left;
  height: ${ScreenHeight * 0.098}px;
`;

export const TextDescription = styled.Text`
  font-family: Roboto;
  font-size: 15px;
  line-height: 30px;
  text-align: justify;
  color: #4f565d;
  margin-bottom: 30%;
`;

export const TextPages = styled.Text`
  font-size: 14px;
  line-height: 25px;
  color: #9f8b0c;
  text-align: center;
`;

export const PriceText = styled.Text`
  font-family: Roboto;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #2c2605;
  width: auto;
  padding: 3px 2px 0px 0px;
`;

export const TextAuthors = styled.Text`
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 25px;
  color: #9f8b0c;
`;

export const BuyButton = styled.View`
  background-color: #4a90e2;
  width: 116px;
  height: 36px;
  border-radius: 18px;
  elevation: 20;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const DisabledButton = styled.View`
  background-color: #999;
  width: 116px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-family: Roboto;
  font-weight: bold;
`;

export const LoveButton = styled.View`
  background-color: #dc4b5d;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
