import React, { useEffect, useState } from "react";
import { Dimensions, Image, Text } from "react-native";
import { Container } from './styles'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Header = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return (
     <Container style={{width: dimensions.window.width - 40}} >
      <Image source={require('../../assets/logo.png')} style={{marginTop: 25}} />
       <Text style={{color: "white", marginTop: 65, marginHorizontal: 10, fontWeight: 'bold', fontSize: 16}} >Welcome to the Marketplace!</Text>
     </Container>
  )
}

export default Header