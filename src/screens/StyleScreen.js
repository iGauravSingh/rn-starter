import React, { useState } from "react";
import { View,Text,StyleSheet,Button,FlatList } from "react-native";

const StyleScreen =()=>{

    return (<View>
        <View style={Styles.view1}>
            <Text style={Styles.box1}></Text>
            <Text style={Styles.box2}></Text>
        </View>
        <View style={Styles.view2}>
            <Text style={Styles.box3}></Text>
        </View>
    </View>
    )
}

const Styles = StyleSheet.create({
    view1:{
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    view2:{
        alignItems: 'center'
    },
    box1: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
    box2: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
    box3: {
        height: 100,
        width: 100,
        backgroundColor: 'orange'
    }
})

export default StyleScreen
