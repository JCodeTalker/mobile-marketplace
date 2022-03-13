import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { RootStackParamList } from '../../routes';
import { Container, Product, ProductContainer, ProductImage, ProductList } from './styles'
import { View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import formatValue from '../../utils/formatValue'
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';


type cartProp = StackNavigationProp<RootStackParamList, "Cart">;
type productType = {
  id: string,
  title: string,
  image_url: string,
  price: number,
  quantity: number
}
export default function Cart() {
  const navigation = useNavigation<cartProp>()
  const [products, setProducts] = useState<productType[]>([{
    id: '1',
    title: 'Assinatura Trimestral',
    image_url: 'https://static.crunchyroll.com/cr-spa-registration/assets/img/logo/cr_logo.png',
    // image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.pn',
    price: 150,
    quantity: 1
  },
  {
    id: '2',
    title: 'Assinatura Trimestral',
    image_url: 'https://toppng.com/uploads/preview/bleach-bleach-anime-logo-transparent-11563025094ksqaagis2s.png',
    // image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.pn',
    price: 150,
    quantity: 1
  },
  
  {
    id: '3',
    title: 'Assinatura Trimestral',
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/8/86/Dblack.png',
    // image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.pn',
    price: 150,
    quantity: 1
  }
])
  return (
    <Container >
      <ProductContainer>
        <FlatList 
        // <ProductList 
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={ <View/> }
          ListFooterComponentStyle={{
            height: 80
          }}
          style={{flex: 1, paddingVertical: 30, paddingHorizontal: 10}}
          renderItem = {({item}: {item: productType}) => (
            <Product>
              <ProductImage source={{uri: item.image_url}} />
            </Product>
          )} />
      </ProductContainer>
    </Container>
  )
}