import React, { useState } from "react";
import { View,Text,StyleSheet,Button } from "react-native";





const CounterScreen = ()=> {

    const [counter,setCounter] = useState(0)

    const handleIncrement = ()=>{
        setCounter(prevState=> prevState + 1)
    }
    const handleDecrement = ()=>{
        setCounter(prevState=> prevState - 1)
    }

    return (<View>
        <Text>Current Count: {counter}</Text>
        <Button
            title="Increment"
            onPress={handleIncrement}
        />
        <Button
            title="Decrement"
            onPress={handleDecrement}
        />
    </View>
    )
}



const styles = StyleSheet.create({})

export default CounterScreen