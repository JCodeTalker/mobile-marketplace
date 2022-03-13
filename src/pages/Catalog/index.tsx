/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import { View, ListRenderItem } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';
import FloatingCart from '../../components/FloatingCart';
import { 
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText
 } from './styles';

type productType = {
    id: string,
    title: string,
    image_url: string,
    price: number,
}

export default function App() {
  const [products, setProducts] = useState<productType[]>([{
    id: '1',
    title: 'Assinatura Trimestral',
    image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.pn',
    price: 150,
  }])
  return (
    <Container>
      <ProductContainer>
        <FlatList
          data={products}
          numColumns={1}
          style={{flex: 1, paddingVertical: 40, paddingHorizontal: 20}}
          keyExtractor={(item) => item.id}
          ListFooterComponent={ <View/> }
          ListFooterComponentStyle={{
            height: 80
          }}
          renderItem = {({item}) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }}/>
              <ProductTitle> {item.title} </ProductTitle>
              <PriceContainer>
                <ProductPrice>
                  {formatValue(item.price)}
                </ProductPrice>
                <ProductButton onPress={() => {}} >
                <ProductButtonText>adicionar</ProductButtonText>
                <FeatherIcon size={30} name="plus-circle" color="#d1d7e9" />
                </ProductButton>
              </PriceContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <FloatingCart/>
    </Container>
  )
}
