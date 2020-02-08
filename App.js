import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
          <View style={{padding: 50}}>
            <TextInput placeholder='Course Goal' style={{borderColor: 'black', borderWidth: 1}}/>
            <Button title='ADD'/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
