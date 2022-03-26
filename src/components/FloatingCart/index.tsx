import React, { useMemo } from 'react';
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
import { useSelector } from 'react-redux';
import { actionType } from '../../store/modules/cart/actions';
import { productType } from '../../pages/Cart';
import formatValue from '../../utils/formatValue';

type floatingCartProp = StackNavigationProp<RootStackParamList>;
interface cartContent extends productType {
  amount: number,
  priceFormatted: string
}

 export default function FloatingCart() {
   const navigation = useNavigation<floatingCartProp>()
   const products = useSelector(({cart} : {cart: cartContent[]}) => cart)

   const cartSize = useMemo(() => {
     return products.length || 0
   }, [products])

   const cartTotal = useMemo(() => {
     const cartAmount = products.reduce((previousValue, product) => {
       const totalPrice = previousValue + product.price * product.amount
       return totalPrice 
      }, 0)
      
      return formatValue(cartAmount)
   }, [products])
   
   return (
     <Container>
       <CardButton onPress={() => navigation.navigate("Cart")}>
         <FeatherIcon name="shopping-cart" size={24} color="#f3f9ff" />
         <CartButtonText>{cartSize} {cartSize === 1 ? "item" : "itens"}</CartButtonText>
         <CartPricing>
           <CartTotalPrice>{cartTotal}</CartTotalPrice>
         </CartPricing>
         <FeatherIcon name="chevron-right" size={24} color="#f3f9ff" />
       </CardButton>
     </Container>
   )
 }