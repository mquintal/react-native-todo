import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between'
  },
  filters: {
    flexDirection: 'row'
  },
  filter: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent'
  },
  selected: {
    borderColor: 'rgba(175, 47, 47, .2)',
  }
});

export default styles;
