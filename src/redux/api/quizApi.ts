import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quizApi = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Quiz"],
  endpoints: (builder) => ({
    getAllQuiz: builder.query({
      query: () => "/quizzes",
      providesTags: ["Quiz"],
    }),
    addQuiz: builder.mutation({
      query: (body) => ({
        url: `/quizzes`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Quiz"],
    }),
    updateQuiz: builder.mutation({
      query: ({ id, body }) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Quiz"],
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Quiz"],
    }),
  }),
});
export const {
  useGetAllQuizQuery,
  useAddQuizMutation,
  useUpdateQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
