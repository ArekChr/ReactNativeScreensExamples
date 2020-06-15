import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

export const NativeStack = createNativeStackNavigator();

function First({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <Button
        title="Go To Second"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

function Second({navigation}) {
  return (
    <View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export function Sandbox() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen name="First" component={First} />
        <NativeStack.Screen
          name="Third"
          component={Second}
          options={{
            title: 'MODAL',
            stackPresentation: 'fullScreenModal',
            headerBackTitle: 'back',
            headerCenter: () => <Text>MODAL!!</Text>,
            headerHideBackButton: false,
            headerLeft: () => <Button title="Button" />,
            headerLargeTitle: true,
            headerShown: true,
            headerRight: () => <Button title="Back" onPress={() => null} />,
          }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
