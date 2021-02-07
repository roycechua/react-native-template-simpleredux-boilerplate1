import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const Screen = ({ navigation }) => {

    const goToHomeScreen = () => navigation.navigate('Home');

    return (
        <View style={styles.sampleStyle}>
            <Text>Login Screen of ProjectName</Text>
            <Button onPress={goToHomeScreen}>Go to Home Screen</Button>
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
