import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import { addToCart } from '../../store/actions/cartItem';

const ProductOverviewScreen = ({navigation, route}) => {
  const product = useSelector(state => state.productReducer.availaibleProducts);
  const dispatch = useDispatch();

  const onDetails = id => (navigation.navigate('ProductDetailsSceen',{
    pid: id
  }));
  const addToCartHandler = itemProduct => {
    dispatch(addToCart(itemProduct));
  };
  return (
    <FlatList data={product} keyExtractor={item => item.id} renderItem={itemData => <ProductItem title={itemData.item.name} image={itemData.item.imageUrl} price={itemData.item.price.toString()} onDetails={() => onDetails(itemData.item.id)} addToCart={() => addToCartHandler(itemData.item)} />
    } />
  )
}

export default ProductOverviewScreen;