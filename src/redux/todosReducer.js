const initialState = {
  todos: [],
  loading: 'idle',
  error: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: 'pending',
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        todos: action.payload,
        loading: 'succeeded',
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: 'failed',
      };
    case 'FETCH_END':
      return {
        ...state,
        loading: 'idle',
      };
    case 'ADD_TODO': {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    }
    case 'UPDATE_TODO': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
