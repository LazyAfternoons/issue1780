import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors, View } from 'react-native-ui-lib';

const Test = () =>{
  return(
    <View style={viewStyle.container}>
    </View>
  )
}

const viewStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange,
    height: Dimensions.get('window').height
  }
})


export default Test