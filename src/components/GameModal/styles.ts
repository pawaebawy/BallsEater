import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalBlockBG: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  modalBlock: {
    position: 'relative',
    width: 'calc(100% - 30px)',
    margin: 'auto',
    backgroundColor: '#282828',
    padding: 15,
    borderRadius: 10
  },
  modalClose: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  modalCloseImage: {
    width: 30,
    height: 30
  },
  modalContent: {
    width: 'calc(100% - 45px)'
  }
});
