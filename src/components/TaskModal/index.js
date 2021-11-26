import React from 'react';
import PropTypes from 'prop-types';
import TaskEditModal from '../TaskEditModal';

function TaskModal({
  id,
  isOpen,
  closeModal,
  submit,
}) {
  return (
    <TaskEditModal
      task={{ name: '', description: '', isFinished: false, listId: id }}
      isOpen={isOpen}
      closeModal={closeModal}
      title="Create a task"
      submit={submit}
    />
  );
}

TaskModal.propTypes = {
  // Is the modal open or not
  isOpen: PropTypes.bool.isRequired,
  // Function to close the modal
  closeModal: PropTypes.func.isRequired,
  // Function to submit the new Board
  submit: PropTypes.func.isRequired,
};

export default TaskModal;
