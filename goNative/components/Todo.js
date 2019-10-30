import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'

const Todo = (props) => (
  <View >
    <Text style={{fontSize: 20, color: '#FCA902'}}>
      {props.title}
    </Text>
  </View>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
  }

// Todo.defaultProps = {
//   title: 'Todo padrão'
// }

export default Todo
