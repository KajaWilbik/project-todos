/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  list: []

};
console.log(initialState)
export const tasks = createSlice({

  name: 'todos',
  initialState,
  reducers: {
    setAllItems: (state, action) => {
      state.list = action.payload
    },

    addTask: (state, action) => {
      state.list.push(action.payload);
      console.log('action', action);
    },
    removeTask: (state, action) => {
      state.list.splice(action.payload, 1);
      console.log('remove', state)
    },

    toggleComplete: (state, action) => {
      const { id, complete } = action.payload;
      const task = state.list.find((list) => list.id === id);
      if (task) {
        task.complete = !complete;
      }
      console.log('updatedToggle', task)
    }

    // toggleComplete: (state, action) => {
    //   state.list.forEach((list) => {
    //     if (list.id === action.payload) {
    //       list.complete = !list.complete
    //     }
    //   });

    // TRIED TO USE FINDINDEX, MANAGED TO MAKE IT WORK BUT WAS GETTING A WEIRD ERROR MESSAGE

    // const index = state.list.findIndex(
    //   (task) => task.id === action.payload.id,
    //   state.list[index].complete = action.payload.complete;
    // )

    // console.log('complete', index)
  }

});

export const {
  addTask,
  toogleComplete,
  removeTask
} = tasks.reducer