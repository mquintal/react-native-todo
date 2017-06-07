import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './footer.styles';

class Footer extends Component {
  render() {
    const { filter, count } = this.props;

    return (
      <View style={styles.container}>
        <Text>Items: {count}</Text>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === 'ALL' && styles.selected]} onPress={() => this.props.onFilter('ALL')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'ACTIVE' && styles.selected]} onPress={() => this.props.onFilter('ACTIVE')}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'COMPLETE' && styles.selected]} onPress={() => this.props.onFilter('COMPLETE')}>
            <Text>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Footer;
