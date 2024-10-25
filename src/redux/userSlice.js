import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    editUser: (state, action) => state.map(user => (user.id === action.payload.id ? action.payload : user)),
    deleteUser: (state, action) => state.filter(user => user.id !== action.payload),
    addUser: (state, action) => [...state, {id : state.length + 1, ...action.payload}],
  },
});

export const { setUsers, editUser, deleteUser, addUser } = userSlice.actions;
export default userSlice.reducer;

