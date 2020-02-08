import React from 'react';
import { StyleSheet,View, Button, TextInput} from 'react-native';

const GoalInput = props => {

// we can add all logic here as well
// at the moment we are lifting state up

        return (
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Course Goal' 
                    style={styles.textStyle}
                    onChangeText={props.inputFunc}
                    value={props.text}
                />
                <Button 
                    title='ADD'
                    onPress={props.goalFunc}
                />
            </View>
        )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      allignItems: 'center'
    },
    textStyle: {
      width: '50%', 
      borderColor: 'black', 
      borderWidth: 1
    }
  });

export default GoalInput;
