import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Task: {
    alignItems: 'center',
    backgroundColor: '#abc',
  },
  TaskText: {
    // backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  TitleView: {
    alignItems: 'center',
    alignContent: 'center',
    borderWidth: 5,
    borderRadius: 10,
    borderStyle: 'solid',
    flexDirection: 'row',
    padding: 5,
    // borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  TitleText: {
    flex: 0.8,
    paddingLeft: 8,
    fontSize: 18,
  },
  TitleTextButtons: {
    paddingRight: 8,
    flex: 0.1,
    flexDirection: 'row',
  },
});
