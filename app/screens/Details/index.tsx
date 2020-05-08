import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import {
  HeaderContainerLeft,
  Title,
  TitleContainer,
} from '../../components/AppHeader/styles';
import { currencyBRLString } from '../../services/Currency';
import {
  DetailsScreenNavigationProp,
  DetailsScreenRouteProp,
} from '../../types';
import {
  ActionContent,
  BodyContainer,
  BottomHeadContent,
  BuyButton,
  DisabledButton,
  HeadContainer,
  HeadContent,
  ImageShaddow,
  ImageWraper,
  LeftBookHead,
  LoveButton,
  MainContainer,
  PagesInfo,
  PriceText,
  RightBookHead,
  TextAuthors,
  TextButton,
  TextDescription,
  TextPages,
  TextTitle,
  TitleContent,
} from './styles';

interface Props {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

export default function Details({ route, navigation }: Props) {
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TitleContainer>
          <Title>Pixter Books</Title>
        </TitleContainer>
      ),
      headerLeft: () => (
        <HeaderContainerLeft>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon size={25} name='keyboard-backspace' color='#000' />
          </TouchableOpacity>
        </HeaderContainerLeft>
      ),
      headerStyle: {
        backgroundColor: '#FFDD0D',
        elevation: 0,
      },
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <AppHeader barStyle='dark-content' backgroundColor='#ffdd0d' />

      <MainContainer>
        <HeadContainer>
          <LeftBookHead>
            <ImageWraper>
              <ImageShaddow
                source={{
                  uri: params.thumbnail,
                }}
              />
            </ImageWraper>

            <PagesInfo>
              <TextPages>
                {params.pages ? ` ${params.pages} pages` : null}
              </TextPages>
            </PagesInfo>
          </LeftBookHead>

          <RightBookHead>
            <HeadContent>
              <TitleContent>
                <TextTitle numberOfLines={3}>
                  {params.title}

                  {params.subtitle && `: ${params.subtitle}`}
                </TextTitle>
                <TextAuthors>
                  {params.authors
                    ? params.authors.map(author =>
                        params.authors.indexOf(author) > 0
                          ? `, ${author}`
                          : `by ${author}`
                      )
                    : 'Author Unavailable'}
                </TextAuthors>
              </TitleContent>

              <BottomHeadContent>
                <PriceText>{`R$ ${currencyBRLString(params.price)}`}</PriceText>
                <StarRating
                  disabled
                  maxStars={5}
                  rating={params.averageRating}
                  emptyStar={'star'}
                  emptyStarColor='#E4C81B'
                  fullStarColor='#4C4309'
                  starSize={18}
                  containerStyle={{ padding: 5 }}
                  starStyle={{ padding: 2 }}
                />
              </BottomHeadContent>

              <ActionContent>
                {params.price ? (
                  <TouchableOpacity>
                    <BuyButton>
                      <TextButton>BUY</TextButton>
                    </BuyButton>
                  </TouchableOpacity>
                ) : (
                  <DisabledButton>
                    <TextButton>NOT FOR SALE</TextButton>
                  </DisabledButton>
                )}
                <TouchableOpacity>
                  <LoveButton>
                    <Icon
                      size={20}
                      name='favorite-border'
                      color='#fff'
                      style={{
                        paddingTop: 3,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                      }}
                    />
                  </LoveButton>
                </TouchableOpacity>
              </ActionContent>
            </HeadContent>
          </RightBookHead>
        </HeadContainer>

        <BodyContainer>
          <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            showsVerticalScrollIndicator={false}
          >
            <TextDescription>{params.description}</TextDescription>
          </ScrollView>
        </BodyContainer>
      </MainContainer>
    </SafeAreaView>
  );
}
