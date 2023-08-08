import React from 'react';
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    ButtonText,
    StyledButton,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar,
} from '../components/styles';

import { StatusBar } from 'expo-status-bar';
const Welcome = () => {
    return (
        <>
            <StatusBar style="light" />
            <InnerContainer>
                <WelcomeContainer>
                    <WelcomeImage resizeMode="cover" source={require('./../assets/img/img2.png')} />
                    <PageTitle welcome={true}>Welcome Buddy!</PageTitle>
                    <SubTitle welcome={true}>Olga Simpson</SubTitle>
                    <SubTitle welcome={true}>olga@test.com</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/img/logo.jpg')} />
                        <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;
