import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>${props.price}</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button color={Colors.primaryColor} title="Details" onPress={props.onDetails}/>
        </View>
        <View style={styles.button}>
            <Button color={Colors.primaryColor} title="Add to Cart" onPress={props.addToCart} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    product: {
        margin: 10,
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowColor: 'white',
        shadowOpacity: 0.3,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: 'white',
        height: 200
    },
    image: {
        height: Dimensions.get('screen').height > 600 ? 100: 80,
        width: '100%'
    },
    text : {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'normal',
        margin: 2
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '40%%',
        padding: 5,
        margin: 5
    }
})

export default ProductItem