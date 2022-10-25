import React, {useEffect, useState} from "react";
import { Text, Button } from "react-native";
import {Container,
    Scroller, 
    FakeSwiper, 
    PageBody, 

    SwipeDot, 
    SwipeDotActive, 
    SwipeItem, 
    SwipeImage,

    UserAvatar, 
    UserInfoName,
    UserInfoArea,  
    UserFavButton,
    UserInfo,
    BackButton,
    LoadingIcon,

    ServiceArea, 
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicesTitle,
    ServicePrice,
    ServiceChooseBtnText,
    ServiceChooseBtn,

    TestimonialAre,

} from './styles';


import { useNavigation, useRoute } from "@react-navigation/native";
import Swiper from "react-native-swiper";

import Api from "../../Api";
import Stars from "../../components/Stars";

import FavoriteIcon from "../../assets/favorite.svg"
import BarberLogo from '../../assets/barber.svg'
import BackIcon from '../../assets/back.svg'

export default () => {

    const navigation = useNavigation();
    const route = useRoute();

    //PEGA AS INFORMAÇÕES DO BARBEIRO SELECIONADO
    const [userInfo, setUserInfo] = useState({

        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getBarberInfo = async () => {
            setLoading(true);
            let json = await Api.getBarber(userInfo.id);

            if(json.error == '') {
                setUserInfo(json.data);

            }else {
                alert("Erro: " +json.error);
            }
            setLoading(false);
        }
        getBarberInfo();

    },[]);

    const handleBackButton = () =>{
        navigation.goBack();
    }

    return (
        <Container>
            <Scroller> 
                
                <FakeSwiper>
                <BarberLogo width="100%" height="90%" /> 
                </FakeSwiper> 
            {/* </Scroller>
           
             
            <Scroller> */}
                
                <PageBody>
                    <UserInfoArea>
                        
                        <UserAvatar source={{uri:userInfo.avatar}}/>
                        <UserInfo>
                            <UserInfoName>{userInfo.name}</UserInfoName>
                            <Stars stars={userInfo.stars} showNumber={true}/>
                        </UserInfo>
                        <UserFavButton>
                            <FavoriteIcon width="24" height="24" fill="ff0000"/>
                        </UserFavButton>

                    </UserInfoArea> 
                    

                    {userInfo.services && 
                        <ServiceArea>
                            <ServicesTitle>Lista de Serviços </ServicesTitle>
                            {userInfo.services.map((item, key) =>(
                                <ServiceItem key={key}>
                                    <ServiceInfo>
                                        <ServiceName>{item.name}</ServiceName>
                                        <ServicePrice>R$ {item.price}</ServicePrice>
                                    </ServiceInfo>
                                    <ServiceChooseBtn>
                                        <ServiceChooseBtnText>Agendar</ServiceChooseBtnText>
                                    </ServiceChooseBtn>
                                    
                                </ServiceItem>
                            )  )}
                        </ServiceArea>
                    }
                </PageBody>
            </Scroller>
            <BackButton onPress={handleBackButton}>
                <BackIcon width="44" height="44" fill="#000" />
            </BackButton>
        </Container>
    );
}