import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const info = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="pt-10 text-5xl text-center">Hours of Operation:
        Mon-Fri from 10:00 to 12:00 and 1:00 to 6:00{"\n\n"}
        Sat-Sun from 12:00 to 6:00 {"\n\n"}

        We are located at 222 West 16th Street, South lot.

      </Text>
    </View>
  )
}

export default info

const styles = StyleSheet.create({})