import React, { useEffect } from "react";
import Categories from "./components/Categories/Categories";
import Tasks from "./components/Tasks/Tasks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TasksLoader, CategoriesLoader } from "./components/Loader/Loader";
import { listsAPI } from "./service/ListsService";
import { tasksAPI } from "./service/TasksService";


function App() {
  let navigate = useNavigate()
  const { data: lists, isLoading:isListsLoading, isError } = listsAPI.useFetchAllListsQuery('')
  const { isLoading:isTasksLoading } = tasksAPI.useFetchAllTasksQuery('')
  
  useEffect(() => {
    navigate('lists/all')
  }, [])

  return (
    <div className="app">
      {isError && <ErrorPage />}
      {isListsLoading || isTasksLoading ?
        <>
          <CategoriesLoader />
          <TasksLoader />
        </>
        :
        <>
          <Categories />
          <Routes>
            <Route path='/lists/all' element={<Tasks />} />
            {lists.map(list =>
              <Route
                key={list.id}
                path={`lists/${list.id}`}
                element={<Tasks />} />)}
          </Routes>
        </>      
      } 
    </div>
  )
}

export default App;
