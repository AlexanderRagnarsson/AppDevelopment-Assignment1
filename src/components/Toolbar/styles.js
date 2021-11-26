import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    backgroundColor: '#fff',
  },
  toolbarAction: {
    flex: 1,
    backgroundColor: '#321',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  toolbarActionText: {
    fontWeight: 'bold',
    color: 'white',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 200,
  },
});
