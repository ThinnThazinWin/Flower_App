import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from "./../components/style";

const Welcome = ({navigation}) => {
  return (
    <InnerContainer>
      <StatusBar style="light" />
      <WelcomeImage
        resizeMode="cover"
        source={require("./../assets/img/expo-bg2.png")}
      />
      <WelcomeContainer>
        <PageTitle Welcome={true}>welcome Buddy </PageTitle>
        <SubTitle Welcome={true}>Olga Simpson</SubTitle>
        <SubTitle Welcome={true}>dede@gmail.com</SubTitle>

        <StyledFormArea>
          <Avatar
            resizeMode="cover"
            source={require("./../assets/img/expo-bg1.png")}
          />
          <Line />
          <StyledButton onPress={() => navigation.navigate('Login')}>
            <ButtonText>Logout</ButtonText>
          </StyledButton>
        </StyledFormArea>
      </WelcomeContainer>
    </InnerContainer>
  );
};

export default Welcome;
