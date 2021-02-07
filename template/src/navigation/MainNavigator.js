import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Screens from '../screens'

const MainNavigator = () => {
    
    const MainStack = createStackNavigator();

    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Login">
                <MainStack.Screen 
                    name="Login" 
                    component={Screens.loginScreen} 
                    options={{
                        headerShown:false
                    }} />
                <MainStack.Screen 
                    name="Home" 
                    component={Screens.homeScreen} 
                    options={{
                        headerShown:false
                    }} />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator);

const styles = StyleSheet.create({})

