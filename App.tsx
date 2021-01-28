import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert
} from 'react-native';

import Hello from './src/components/HelloComponent/HelloComponent'

const App = () => {

  const handleClick = () => {
    Alert.alert('提示', '这是用typescrpt集成的框架哦');
}

  return (
    <SafeAreaView>
      <View>
        <Hello name="noras-ark" handleClick={handleClick} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
