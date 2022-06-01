import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Torch from 'react-native-torch'
import RNShake from 'react-native-shake'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle)
  useEffect(() => {
    // LIGA FLASH
    Torch.switchState(toggle)
  }, [toggle])
  useEffect(() => {
    //Chacoalhar celular
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle)
    })
    return () => subscription.remove()
  }, [])

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleChangeToggle}>
        <Image
          style={toggle ? styles.lightOn : styles.lightOff}
          source={
            toggle
              ? require('./assets/icons/eco-light.png')
              : require('./assets/icons/eco-light-off.png')
          }
        />
        <Image
          style={toggle ? styles.lightOn : styles.lightOff}
          source={
            toggle
              ? require('./assets/icons/logo-dio.png')
              : require('./assets/icons/logo-dio-white.png')
          }
        />
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lightOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  lightOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150
  }
})
