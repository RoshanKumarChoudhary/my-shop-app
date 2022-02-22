import { StyleSheet, Text, View, Image, Button, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const EachProduct = (props) => {
  return (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={{uri:props.image}} />
      <Text style={styles.text}>{props.price}</Text>
      <Text style={styles.text}>{props.description}</Text>
      <View style={styles.button}>
        <Button title='Add to cart' onPress={props.addToCart} color={Colors.primaryColor} />
      </View>
    </View>
  )
}

export default EachProduct

const styles = StyleSheet.create({
    itemContainer:{
        width: '100%',
        height: '100%',
    },
    image: {
        height: '60%',
        width: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    button:{
        position: 'absolute',
        bottom: 50,
        left: '35%'
    }
})