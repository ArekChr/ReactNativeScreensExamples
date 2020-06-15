import React from 'react';
import 'react-native-gesture-handler';
import {Sandbox} from './Sandbox';
import {ReactNativeScreensBugs} from './ReactNativeScreensBugs';
import {enableScreens} from 'react-native-screens';

enableScreens();

export default function App() {
  return <ReactNativeScreensBugs />;
}
