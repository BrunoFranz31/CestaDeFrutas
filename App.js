import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';


import Cesta from './src/telas/index';
import mock from "./src/mocks/cesta"

export default function App() {

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}