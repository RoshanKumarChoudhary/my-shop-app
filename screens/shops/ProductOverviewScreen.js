import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';

const ProductOverviewScreen = (props) => {
  const product = useSelector(state => state.productReducer.availaibleProducts);

  const onDetails = () => { };
  const addToCart = () => { };
  return (
    <FlatList data={product} keyExtractor={item => item.id} renderItem={itemData => <ProductItem title={itemData.item.name} image={itemData.item.imageUrl} price={itemData.item.price.toString()} onDetails={onDetails} addToCart={addToCart} />
    } />
  )
}

export default ProductOverviewScreen;