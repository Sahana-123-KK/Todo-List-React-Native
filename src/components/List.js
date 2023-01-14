import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ListComponent from './ListComponent'

const List = ({ list, setList }) => {
    return (
        <View style={style?.container} >
            <Text style={style?.headList} >Your List</Text>

            <FlatList
                keyExtractor={(item) => item?.no}
                renderItem={({ item }) => <ListComponent item={item.task} setList={setList} no={item?.no} />}
                data={list}

            />


        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "tomato",
        color: "grey",
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
    ,
    headList: {
        fontSize: 20,
        color: "white"
    }
})
export default List