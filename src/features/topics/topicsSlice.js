import { createSlice } from "@reduxjs/toolkit";

 export const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
      /*id: {
                id:,
                name:,
                icon:
            } */
    }
  },
  reducers: {
    addTopic: (state, action) => {
      const idKey = action.payload.id;
      return {
        ...state,
        [idKey]: { ...action.payload, quizIds: [] }
      };
    }
  }
});

export const topicsSelector = (state) => state.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;