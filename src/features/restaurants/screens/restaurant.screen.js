import React, { useState } from 'react'
import { SafeAreaView, Platform, StatusBar, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import { RestaurantInfoCard } from '../components/restaurant-info-card'

const isAndroid = Platform.OS === 'android'

const ContainerScreen = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid && StatusBar.currentHeight}px;
`

const SearchBarContainer = styled(View)`
  flex: 1;
  background-color: white;
  justify-content: center;
  padding: 0px 10px 0px 10px
`

const ListContainer = styled(View)`
  flex: 9;
  background-color: white;
`

export const RestaurantScreen = () => {
  const [search, setSearch] = useState('')
  const onChangeSearch = query => setSearch(query)
  return (
    <ContainerScreen>
      <SearchBarContainer>
        <Searchbar placeholder='Search' onChangeText={onChangeSearch} value={search} />
      </SearchBarContainer>
      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </ContainerScreen>
  )
}
