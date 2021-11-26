import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  TaskText: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 60,
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    alignContent: 'center',
  },
  allignRight: {
    alignSelf: 'flex-end',
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
  },
  taskView: {
    flex: 0.9,
  },
  taskName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskDescription: {
  },
});
