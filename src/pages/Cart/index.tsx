import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParamList } from '../../routes';
import { ActionButton, ActionContainer, Container, Product, ProductContainer, ProductImage, ProductList, ProductPrice, ProductPriceContainer, ProductQuantity, ProductSinglePrice, ProductTitle, ProductTitleContainer, SubTotalValue, TotalContainer, TotalProductsContainer, TotalProductsText } from './styles'
import { View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import formatValue from '../../utils/formatValue'
import React, { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import EmptyCart from '../../components/EmptyCart';
import * as CartActions from "../../store/modules/cart/actions"
import { useDispatch, useSelector } from 'react-redux';

type cartProp = StackNavigationProp<RootStackParamList, "Cart">;
export interface productType {
  id: string,
  title: string,
  image_url: string,
  price: number,
  amount: number
}
export default function Cart() {
  const dispatch = useDispatch()
  const navigation = useNavigation<cartProp>()
  const products = useSelector(({cart} : {cart: productType[]}) => cart)

const cartSize = useMemo(() => {
  console.log(products)
  return products.length || 0
}, [products])

const cartTotal = useMemo(() => {
  const cartAmount = products.reduce((accumulator, product) => {
    const totalPrice = accumulator + product.price * product.amount
    return totalPrice
  }, 0)
  return formatValue(cartAmount)
}, [products])

function increment(product: productType) {
  dispatch(CartActions.updateAmountRequest(parseInt(product.id), product.amount + 1))
}

function decrement(product: productType) {
  dispatch(CartActions.updateAmountRequest(parseInt(product.id), product.amount - 1))
}

function removeFromCart(id: number) {
  dispatch(CartActions.removeFromCart(id))
}

  return (
    <Container >
      <ProductContainer>
        <FlatList 
          // {/* <ProductList  */}
          data={products}
          keyExtractor={item => item.id}
          ListEmptyComponent={<EmptyCart />}
          ListFooterComponent={ <View/> }
          ListFooterComponentStyle={{
            height: 80
          }}
          style={{flex: 1, paddingVertical: 30, paddingHorizontal: 10}}
          renderItem = {({item}: {item: productType}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}} />
              <ProductTitleContainer>
                <ProductTitle>
                  {item.title}
                  </ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>

                  <TotalContainer>
                    <ProductQuantity> 
                      {`${item.amount}x`} 
                      </ProductQuantity>
                      <ProductPrice>
                        {formatValue(item.price * item.amount)}
                      </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>

              <ActionContainer>
                <ActionButton onPress={() => increment(item)}>
                  <FeatherIcon name='plus' color="#e83f5b" size={16} />
                </ActionButton>
                <ActionButton onPress={() => 
                item.amount > 1 ? decrement(item) : removeFromCart(parseInt(item.id))
                }>
                  <FeatherIcon name='minus' color="#e83f5b" size={16} />
                </ActionButton>
              </ActionContainer>
            </Product>
          )} />
          
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name='shopping-cart' color="#fff" size={24} />
        <TotalProductsText>{cartSize} {cartSize == 1 ? 'item' : 'itens'} </TotalProductsText>
        <SubTotalValue> {cartTotal} </SubTotalValue>
      </TotalProductsContainer>
    </Container>
  )
}