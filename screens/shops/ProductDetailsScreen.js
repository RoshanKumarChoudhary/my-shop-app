import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EachProduct from '../../components/EachProduct';
import { addToCart } from '../../store/actions/cartItem';

const ProductDetailsScreen = ({navigation, route}) => {
    const pid = route.params.pid;
    const availaibleProducts = useSelector(state => state.productReducer.availaibleProducts);
    const specificProduct = availaibleProducts.filter(item => item.id === pid);
    const dispatch = useDispatch();
    const addToCartHandler = product => {
        dispatch(addToCart(product));
    }
    useLayoutEffect(() => {
        const pid = route.params.pid;
        const specificProduct = availaibleProducts.filter(item => item.id === pid);
       navigation.setOptions({
           title: specificProduct[0].name === ''? 'Product Overview': specificProduct[0].name
       })
    })
  return (
      <EachProduct image={specificProduct[0].imageUrl} price={specificProduct[0].price} description={specificProduct[0].desc} addToCart={() => addToCartHandler(specificProduct[0])}/>
  )
}

export default ProductDetailsScreen