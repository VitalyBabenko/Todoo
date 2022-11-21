import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const listsAPI = createApi({
  reducerPath: "listsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62c6bbd02b03e73a58d57240.mockapi.io/",
  }),
  tagTypes: ["List"],
  endpoints: (build) => ({
    fetchAllLists: build.query({
      query: () => ({
        url: "lists",
      }),
      providesTags: (result) => ["List"],
    }),

    createList: build.mutation({
      query: (list) => ({
        url: "lists",
        method: "POST",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),

    deleteList: build.mutation({
      query: (list) => ({
        url: `lists/${list.id}`,
        method: "DELETE",
        body: list,
      }),
      invalidatesTags: ["List"],
    }),
  }),
});
