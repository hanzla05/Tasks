import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import themeStyle from '../styles/themeStyle'

export default function HomeButton({marginTop,onPress,title}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button,{marginTop:marginTop}]}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '90%',
    backgroundColor: themeStyle.PRIMARY_COLOR,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    borderRadius: 5,
  },
  buttonText: {
    color: themeStyle.WHITE,
  },
})
