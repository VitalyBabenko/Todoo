import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const listsAPI = createApi({
   reducerPath: 'listsAPI',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
   tagTypes: ['List'],
   endpoints: (build) => ({

      fetchAllLists: build.query({
         query:() => ({
            url: 'lists',
         }),
         providesTags: result => ['List']
      }),

      createList: build.mutation({
         query: (list) => ({
            url: 'lists',
            method: 'POST',
            body: list
         }),
         invalidatesTags: ['List']
      }),

      deleteList: build.mutation({
         query: (list) => ({
            url: `lists/${list.id}`,
            method: "DELETE",
            body: list
         }),
         invalidatesTags: ['List']
      })  
   })
}) 