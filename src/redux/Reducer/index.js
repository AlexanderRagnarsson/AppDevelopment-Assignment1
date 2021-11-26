import data from '../../resources/data.json';

// eslint-disable-next-line default-param-last
function Reducer(state = data, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return { ...state, boards: [...state.boards, action.payload] };
    case 'REMOVE_BOARD':
      return { ...state, boards: [state.boards.filter((board) => board.id !== action.payload)] };
    case 'EDIT_BOARD':
      return {
        ...state,
        boards: [state.boards.map((board) => (board.id === action.payload.id ? action : board))],
      };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, action.payload] };
    case 'REMOVE_LIST':
      return { ...state, lists: [state.lists.filter((list) => list.id !== action.payload)] };
    case 'EDIT_LIST':
      return {
        ...state,
        lists: [state.lists.map((list) => (list.id === action.payload.id ? action : list))],
      };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'REMOVE_TASK':
      return { ...state, tasks: [state.tasks.filter((task) => task.id !== action.payload)] };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: [state.tasks.map((task) => (task.id === action.payload.id ? action : task))],
      };
    default:
      return state;
  }
}

export default Reducer;
