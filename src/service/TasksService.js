import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tasksAPI = createApi({
  reducerPath: "tasksAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Task"],
  endpoints: (build) => ({
    fetchAllTasks: build.query({
      query: () => ({
        url: "tasks",
      }),
      providesTags: () => ["Task"],
    }),

    createTask: build.mutation({
      query: (task) => ({
        url: `tasks`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),

    deleteTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),

    updateTask: build.mutation({
      query: (task) => ({
        url: `tasks/${task.id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});
