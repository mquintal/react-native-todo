import { StyleSheet, Platform } from 'react-native';

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

export default styles;
