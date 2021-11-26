import data from '../../resources/data.json';

// eslint-disable-next-line default-param-last
function Reducer(state, action) {
  if (state === undefined) {
    return {
      ...data,
      isBoardModalOpen: false,
      isListModalOpen: false,
      isTaskModalOpen: -1,
      isBoardEditModalOpen: false,
      isListEditModalOpen: -1,
      isTaskEditModalOpen: -1,
      deleteBoardModalOpen: -1,
      deleteListModalOpen: -1,
      deleteTaskModalOpen: -1,
    };
  }
  let newstate = state;
  switch (action.type) {
    case 'ADD_BOARD':
      return { ...state, boards: [...state.boards, action.payload] };
    case 'DELETE_BOARD':
      state.lists.forEach((list) => {
        if (list.boardId === action.payload) {
          newstate = Reducer(newstate, { type: 'DELETE_LIST', payload: list.id });
        }
      });
      return {
        ...newstate,
        boards: newstate.boards.filter((board) => board.id !== action.payload),
      };
    case 'EDIT_BOARD':
      return {
        ...state,
        boards: state.boards.map((board) => (
          board.id === action.payload.id ? action.payload : board)),
      };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, action.payload] };
    case 'DELETE_LIST':
      state.tasks.forEach((task) => {
        if (task.listId === action.payload) {
          newstate = Reducer(newstate, { type: 'DELETE_TASK', payload: task.id });
        }
      });
      return { ...newstate, lists: newstate.lists.filter((list) => list.id !== action.payload) };
    case 'EDIT_LIST':
      return {
        ...state,
        lists: state.lists.map((list) => (list.id === action.payload.id ? action.payload : list)),
      };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'DELETE_TASK':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    case 'UPDATE_BOARD_MODAL':
      return { ...state, isBoardModalOpen: action.payload };
    case 'UPDATE_LIST_MODAL':
      return { ...state, isListModalOpen: action.payload };
    case 'UPDATE_TASK_MODAL':
      return { ...state, isTaskModalOpen: action.payload };
    case 'UPDATE_BOARD_EDIT_MODAL':
      return { ...state, isBoardEditModalOpen: action.payload };
    case 'UPDATE_LIST_EDIT_MODAL':
      return { ...state, isListEditModalOpen: action.payload };
    case 'UPDATE_TASK_EDIT_MODAL':
      return { ...state, isTaskEditModalOpen: action.payload };
    case 'UPDATE_DELETE_BOARD_MODAL':
      return { ...state, deleteBoardModalOpen: action.payload };
    case 'UPDATE_DELETE_LIST_MODAL':
      return { ...state, deleteListModalOpen: action.payload };
    case 'UPDATE_DELETE_TASK_MODAL':
      return { ...state, deleteTaskModalOpen: action.payload };
    default:
      return state;
  }
}

export default Reducer;
