import React, {useState} from "react";
import { Text } from "react-native";
import {Container, Scroller, HeaderArea, HeaderTitle, SearchButton, LocationArea, LocationInput, LocationFinder} from './styles';
import { useNavigation } from "@react-navigation/native";

import SearchIcon from '../../assets/search.svg';
import MyLocationIcon from '../../assets/my_location.svg';




export default () => {

    const navigation = useNavigation();

    const [locationText, setLocationText] = useState('');

    
    return (
        <Container>
            <Scroller>
                <HeaderArea>
                    <HeaderTitle> Encontre seu Barbeiro </HeaderTitle>
                    <SearchButton onPress={()=>navigation.navigate('Search')}>
                        <SearchIcon width="26" height="26" fill="#FFF" />
                    </SearchButton>
                </HeaderArea>

                <LocationArea>

                    <LocationInput placeholder="Onde vocês está?" placeholderTextColor="#FFF" value={locationText} onChangeText={t=>setLocationText(t)} />

                    <LocationFinder>
                        <MyLocationIcon width="24" height="24" fill="#FFF" />
                    </LocationFinder>
                </LocationArea>
            </Scroller>
        </Container>
    )
}