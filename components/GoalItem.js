import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const GoalItem = props => {
    return (
      <TouchableOpacity onPress={props.removeItem.bind(this,props.id)}>
        <View style={styles.listItem} >
          <Text>{props.data.item.value}</Text>
        </View>  
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem: {
      padding: 10,
      borderColor: 'blue',
      backgroundColor: 'grey',
      borderWidth: 1,
      margin: 2
    }
  });
  

export default GoalItem;