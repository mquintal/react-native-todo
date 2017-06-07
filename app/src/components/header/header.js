import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './header.styles';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.header} >
        <TouchableOpacity onPress={this.props.onToggleAllComplete} >
          <Text style={styles.toggleIcon} >{String.fromCharCode(10003)}</Text>
        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={(value) => this.props.onChange(value)}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
        />
      </View>
    );
  }
}

export default Header;
