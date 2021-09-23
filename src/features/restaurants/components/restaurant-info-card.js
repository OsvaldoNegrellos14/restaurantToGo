import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components/native'
import star from './../../../../assets/star'

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 16px;
  margin: 10px;
`

const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
`

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some nice resturant',
    icon = 'raiting',
    photo = ['https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621__340.jpg'],
    address = 'some random street',
    isOpenNow = true,
    raiting = 5,
    isCloredTemporarily = false
  } = restaurant
  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photo[0] }} />
      <Title>{name}</Title>
      <Text>{address}</Text>
      <Text>{isOpenNow && 'Abierto'}</Text>
      <Text>{isCloredTemporarily || 'Acceso total al publico'}</Text>
      <SvgXml sml={star} width={20} height={20} />
      <Text>{raiting + ' ' + icon}</Text>
    </RestaurantCard>
  )
}
