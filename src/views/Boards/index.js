import React from 'react';
import { View, Text } from 'react-native';
// import { headings } from '../../styles';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json'

const Boards = () => {
    return (
        <BoardList data={data.boards} />
    )
};

export default Boards;