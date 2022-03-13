import React from 'react';
import { 
  CardButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice,
  Container
 } from "./styles";
 import FeatherIcon from "react-native-vector-icons/Feather";
 import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParamList } from "../../routes";


type floatingCartProp = StackNavigationProp<RootStackParamList>;

 export default function FloatingCart() {
   const navigation = useNavigation<floatingCartProp>()
   return (
     <Container>
       <CardButton onPress={() => navigation.navigate("Cart")}>
       {/* <CardButton onPress={() => navigation.navigate({ name:"Cart" })}> */}
         <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
         <CartButtonText>2 itens</CartButtonText>
         <CartPricing>
           <CartTotalPrice>R$ 200,00</CartTotalPrice>
         </CartPricing>
         <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
       </CardButton>
     </Container>
   )
 }