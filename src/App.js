/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import LandingPage from './screens/LandingPage';
import {colors} from './utils/constants';
import AppCSS from './App.css';

// CSS
const styles = StyleSheet.create({
  ...AppCSS,
  root: {
    ...AppCSS.root,
    backgroundColor: colors.backgroundColor,
  },
});

const App = () => (
  <View style={styles.root}>
    <LandingPage />
  </View>
);

export default App;
