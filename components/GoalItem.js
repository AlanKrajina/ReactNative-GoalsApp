import React from 'react';
import { Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return (
        <Text style={styles.listItem}>{props.data.item.value}</Text>
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