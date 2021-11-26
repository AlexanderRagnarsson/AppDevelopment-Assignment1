import React from 'react';
import NativeModal from 'react-native-modal';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Modal({
  isOpen,
  closeModal,
  title,
  children,
}) {
  return (
    <NativeModal
      isVisible={isOpen}
      hasBackdrop
      onBackButtonPress={closeModal}
      // onSwipeComplete={closeModal}
      onBackdropPress={closeModal}
      // swipeDirection={['up', 'down']}
      style={styles.modal}
    >
      <View style={styles.body}>
        <Text>{title}</Text>
        {children}
        <Button
          title="Cancel"
          onPress={() => { closeModal(); }}
        />
      </View>
    </NativeModal>
  );
}

Modal.propTypes = {
  // Is the modal open
  isOpen: PropTypes.bool.isRequired,
  // Function called when modal is open
  closeModal: PropTypes.func.isRequired,
  // Title of the modal
  title: PropTypes.string.isRequired,
  // JSX children
  children: PropTypes.node.isRequired,
};

export default Modal;
