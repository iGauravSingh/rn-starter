import React, { useState } from "react";
import { View,Text,StyleSheet,Button,TextInput } from "react-native";

const TextInputScreen =()=>{
    const [text,setText] = useState('')

    return (<View>
        <Text>Please Enter Your Name.</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={text}
            onChangeText={(newValue)=> setText(newValue)}

        />
        <Text>Your name is {text}</Text>
        {text.length < 3 ? <Text>Name should be atleast 3 character</Text> : null}
    </View>)
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
})

export default TextInputScreen




