import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

export const NativeStack = createNativeStackNavigator();

export function ScrollViewBugScreen() {
  const someContent = Array.from({length: 50}, (v, i) => i);

  const scrollRef = useRef<ScrollView>(null);

  function onPress() {
    scrollRef.current?.scrollTo({animated: true, y: 0});
  }

  return (
    <ScrollView ref={scrollRef} contentInsetAdjustmentBehavior="automatic">
      {someContent.map((x) => (
        <TouchableOpacity key={x} onPress={onPress} style={styles.button}>
          <Text>Scroll to 0</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export function StickyHeaderBugScreen() {
  const someContent = Array.from({length: 50}, (v, i) => i);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      stickyHeaderIndices={[0]}>
      <View style={styles.button}>
        <Text>Sticky Header</Text>
      </View>
      {someContent.map((x) => (
        <TouchableOpacity key={x} style={styles.button}>
          <Text>Scroll to 0</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: 'lightblue',
    flex: 1,
  },
});

export function ReactNativeScreensBugs() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTranslucent: true,
          headerStyle: {backgroundColor: 'rgba(255,255,255, 0.1)'},
          headerTitleStyle: {color: 'white'},
        }}>
        <NativeStack.Screen
          options={({navigation}) => ({
            headerLargeTitle: true,

            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('StickyHeader')}>
                <Text style={{color: 'white'}}>StickyHeader</Text>
              </TouchableOpacity>
            ),
          })}
          name="ScrollTo"
          component={ScrollViewBugScreen}
        />
        <NativeStack.Screen
          options={{headerLargeTitle: true}}
          name="StickyHeader"
          component={StickyHeaderBugScreen}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
