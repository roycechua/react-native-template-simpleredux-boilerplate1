import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Screen = ({ navigation }) => {

    const goToLoginScreen = () => navigation.navigate('Login');
    
    return (
        <View style={styles.sampleStyle}>
            <Text>Home Screen</Text>
            <Button onPress={goToLoginScreen}>Go to Login Screen</Button>
        </View>
    )
}

export default Screen;

const styles = StyleSheet.create({
    sampleStyle: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    }
});
