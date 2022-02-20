import React from "react";
import { Image } from "react-native";
import { Container } from './styles'
// \/
// import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
     <Container>
      <Image source={require('../../assets/logo.png')} />
     </Container>
    </>
  )
}

export default Header