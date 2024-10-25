import { createStore } from '@reduxjs/toolkit';
import todosReducer from './todosReducer';

const store = createStore(todosReducer);

export default store;
