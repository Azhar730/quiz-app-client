import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/quiz/quizSlice";
import { quizApi } from "./api/quizApi";
export const store = configureStore({
  reducer: {
    quiz: quizSlice,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quizApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
