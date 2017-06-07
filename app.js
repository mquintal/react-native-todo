import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  ListView,
  Keyboard,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import Footer from './footer';
import Header from './header';
import Row from './row';

function filterItems(items, filter) {
  if (filter === 'ALL') return items;
  if (filter === 'ACTIVE') return items.filter((item) => !item.complete);
  if (filter === 'COMPLETE') return items.filter((item) => item.complete);
}

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      allComplete: false,
      todo: '',
      items: [],
      dataSource: ds.cloneWithRows([]),
      filter: 'ALL',
      loading: true,
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
    this.handleToggleComplete = this.handleToggleComplete.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.setSource = this.setSource.bind(this);
  }

  setSource(items, itemsDataSource, otherState={}) {
    this.setState({
      items,
      dataSource: this.state.dataSource.cloneWithRows(itemsDataSource),
      ...otherState
    });
    AsyncStorage.setItem('items', JSON.stringify(items));
  }

  handleAddItem() {
    if( !this.state.todo ) return ;

    const newItems = [
      ...this.state.items,
      {
        key: Date.now(),
        text: this.state.todo,
        complete: false,
      }
    ];
    this.setSource(newItems, filterItems(newItems, this.state.filter), { todo: '' });
  }

  handleToggleComplete(key, complete) {
    const newItems = this.state.items.map((item) => {
      if (item.key === key) {
        return {...item, complete};
      }
      return item;
    });
    this.setSource(newItems, filterItems(newItems, this.state.filter));
  }

  handleToggleAllComplete() {
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item) => ({
      ...item,
      complete
    }));
    this.setSource(newItems, filterItems(newItems, this.state.filter), { allComplete: complete });
  }

  handleRemoveItem(key) {
    const newItems = this.state.items.filter((item) => item.key !== key);
    this.setSource(newItems, filterItems(newItems, this.state.filter));
  }

  handleFilter(filter) {
    this.setSource(this.state.items, filterItems(this.state.items, filter), { filter });
  }

  componentWillMount() {
    AsyncStorage.getItem('items').then((itemsJson) => {
      this.state.loading = false;
      const items = JSON.parse(itemsJson);
      this.setSource(items, items);
    });
  }

  render() {
    return (
      <View style={styles.container} >
        <Header
          value={this.state.todo}
          onAddItem={this.handleAddItem}
          onToggleAllComplete={this.handleToggleAllComplete}
          onChange={(todo) => this.setState({ todo })}
        />
        <View style={styles.content} >
          <ListView
            style={styles.list}
            dataSource={this.state.dataSource}
            onScroll={() => Keyboard.dismiss()}
            renderRow={({key, ...value}) => {
              return (
                <Row
                  key={key}
                  onRemove={() => this.handleRemoveItem(key)}
                  onComplete={(complete) => this.handleToggleComplete(key, complete)}
                  {...value}
                />
              )
            }}
            renderSeparator={(sectionId, rowId) => {
              return <View key={rowId} style={styles.separator} />
            }}
          />
          {
            this.state.loading &&
            <ActivityIndicator style={styles.loading}
              animating
              size="large"
            />
          }
        </View>
        <Footer
          count={filterItems(this.state.items, 'ACTIVE').length}
          filter={this.state.filter}
          onFilter={this.handleFilter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    ...Platform.select({
      ios: {
        paddingTop: 30,
      }
    })
  },
  loading: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .2)'
  },
  content: {
    flex: 1,
  },
  list: {
    backgroundColor: '#FFF',
  },
  separator: {
    borderWidth: 1,
    borderColor: '#F5F5F5'
  }
});

export default App;
