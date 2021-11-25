import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import BoardList from '../../components/BoardList';
import fileData from '../../resources/data.json';
import BoardModal from '../../components/BoardModal';
import Toolbar from '../../components/Toolbar';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';

function Boards({ navigation: { navigate } }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [data, setData] = useState(fileData);

  const addImage = async (photo) => {
    const newImage = await fileService.addImage(photo);
    return newImage.filename;
  };

  const takePhoto = async () => {
    let photo = await imageService.takePhoto();

    if (photo.length > 0) {
      photo = await addImage(photo);
    }

    return photo;
  };

  const submitFunc = async ({ name, description, thumbnailPhoto }) => {
    const { boards } = data;
    const nextId = boards.reduce((prev, curr) => (curr.id >= prev ? (curr.id + 1) : prev), 0);

    await thumbnailPhoto.then(
      (value) => {
        const board = {
          nextId, name, description, thumbnailPhoto: value,
        };

        boards.push({ id: nextId, ...board });
        setData({
          ...data,
          boards,
        });
      },
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Toolbar
        onAdd={() => setIsBoardModalOpen(true)}
        addString="Add board"
      />
      <Text>BOARDS:</Text>
      <BoardList
        {...{ ...data, navigate }}
      />
      <BoardModal
        isOpen={isBoardModalOpen}
        closeModal={() => setIsBoardModalOpen(false)}
        takePhoto={takePhoto}
        selectFromCameraRoll={() => {}}
        submit={submitFunc}
      />
    </View>
  );
}

Boards.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default Boards;
