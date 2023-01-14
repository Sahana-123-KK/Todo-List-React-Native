import { View, Text } from 'react-native'
import React from 'react'

const ListComponent = ({item,setList,no}) => {
  return (
    <View>
      <Text>Task is : {item} {no}</Text>
    </View>
  )
}

export default ListComponent