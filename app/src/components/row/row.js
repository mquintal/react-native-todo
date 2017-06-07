import React, { Component } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity
} from 'react-native';
import styles from './row.styles';

export default class Row extends Component {
  render() {
    const { complete, text, onComplete, onRemove } = this.props;

    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={onComplete}
        />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]} >{text}</Text>
        </View>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.delete} >X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
