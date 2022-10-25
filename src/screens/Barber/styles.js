import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFFFFF;
`;


export const Scroller = styled.ScrollView`
    flex:1;


`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFF;
    border-radius: 5px;
    margin: 3px;
    `;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #00000000;
    border-radius: 5px;
    margin: 3px;
`;


export const SwipeItem = styled.View`
    flex:1;
    background-color: #63C2D1;

`;


export const SwipeImage = styled.Image`
    width: 100%;
    height:240px:
`;



export const FakeSwiper = styled.View`

    height: 100px;
    background-color: #63C2D1;
    margin-top: 0px;
    margin-bottom: 00px;

`;

export const PageBody = styled.View`
    background-color #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: 10px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top:-0px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    margin-right: 20px;
    margin-left: 30px;
    norder-color: #FFFFFFFF
    border-width: 4px;
`;

export const UserInfo = styled.Text`
    flex: 1;
    justify-content: flex-end;
    
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 3pc solid #999999;
    border-radius:20px;
    justify-content: center;
    align-items: center;
`;



export const TestimonialArea = styled.View``;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left:0;
    top: 0;
    z-index; 9;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;



export const ServiceArea = styled.View`
    margin-top: 20px;

`;

export const ServiceItem = styled.View`
    flex-direction: row;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;

`;

export const ServiceInfo = styled.View`
    flex: 1;
`;

export const ServiceName = styled.Text`
    font-size: 16px;
    font-weight:bold;
    
`;

export const ServicePrice = styled.Text`
    font-size: 14px;
    color: #268596;

`;

export const ServiceChooseBtn = styled.TouchableOpacity`
    border-radius: 10px;
    background-color:#4EADBE;
    padding: 10px 15px;
`;

export const ServiceChooseBtnText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
`;

export const ServicesTitle = styled.Text`
    color: #268596;
    font-size: 18px;
    font-weight: bold;
    margin-left: 30px;
    margin-bottom: 20px;
`;









// Container, Scroller, FakeSwiper, PageBody, UserInfoArea, ServiceArea, TestimonialArea