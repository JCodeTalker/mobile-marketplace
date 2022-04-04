/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions'
import { useDispatch } from "react-redux";

type productType = {
    id: string,
    title: string,
    image_url: string,
    price: number,
}

export default function Catalog() {
  const dispatch = useDispatch()
  const [products, setProducts] = useState<productType[]>([])

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products')
      setProducts(data)
    }
    loadProducts()
  }, [])

  function handleAddToCart(id: string) {
    dispatch(CartActions.addToCartRequest(parseInt(id)))
  }
  
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
                <ProductButton onPress={() => {handleAddToCart(item.id)}} >
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
