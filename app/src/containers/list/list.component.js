import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Row from '../../components/row';
import styles from './list.styles';

export default class List extends Component {
  render() {
    const {
      todo,
      todos,
      filter,
      nTodosActive,
      handleFilter,
      handleAddItem,
      handleToggleAllComplete,
      handleChangeItem,
      handleRemoveItem,
      handleToggleComplete,
    } = this.props;

    return (
      <View style={styles.container} >
        <Header
          value={todo}
          onAddItem={handleAddItem}
          onToggleAllComplete={handleToggleAllComplete}
          onChange={handleChangeItem}
        />
        <View style={styles.content} >
          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={todos}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({key, ...value}) => {
              return (
                <Row
                  key={key}
                  onRemove={() => handleRemoveItem(key)}
                  onComplete={(complete) => handleToggleComplete(key, complete)}
                  {...value}
                />
              )
            }}
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator} />
            }}
          />
      </View>
      <Footer
        count={nTodosActive}
        filter={filter}
        onFilter={handleFilter}
      />
    </View>);
  }
};
