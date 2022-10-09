import React, { useEffect } from "react";
import Categories from "./components/Categories/Categories";
import Tasks from "./components/Tasks/Tasks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TasksLoader, CategoriesLoader } from "./components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {getData} from './asyncAction'


function App() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists)
  const isLoading = useSelector(state => state.isLoading)
  const isError = useSelector(state => state.isError)

  useEffect(() => {
    dispatch(getData())
    navigate('lists/1')
  }, [])

  return (
      <div className="app">
        {isError ? <ErrorPage /> :
          isLoading ?
            <>
              <CategoriesLoader />
              <TasksLoader />
            </>
            :
            <>
              <Categories />
              <Routes>
                <Route path='/lists/1' element={<Tasks />} />
                {lists.map(list =>
                  <Route
                    key={list.id}
                    path={`lists/${list.id}`}
                    element={<Tasks />} />)}
              </Routes>
            </>}
      </div>
  );
}

export default App;
