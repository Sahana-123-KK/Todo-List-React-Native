import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Task = (props) => {
    return (
        <View style={style?.item} >
            <View style={style?.itemLeft}  >
                <View style={style?.square} ></View>
                <Text style={style?.itemText} > {props?.text} </Text>
            </View>
            <View style={style?.circular}>
                <Text
                onPress={() => {
                    props.delete(props.ind)
                }}
                > &nbsp; </Text>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    item: {
        backgroundColor: "white",
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        borderRadius: 5,
        opacity: 0.4
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap"
    },
    itemText: {
        maxWidth: "80%"
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 5
    }
})

export default Task