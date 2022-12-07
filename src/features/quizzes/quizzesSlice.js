import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      state.quizzes[id] = {
        id: id,
        name: name,
        topicId: topicId,
        cardIds: cardIds
      };
    }
  }
});

export const createNewQuizThunk = (payload) => {
  return (dispatch) => {
    dispatch(addQuiz({ ...payload }));
    dispatch(addQuizId({ quizId: payload.id, topicId: payload.topicId }));
  };
};

export const { addQuiz } = quizzesSlice.actions;
export const quizzesSelector = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
