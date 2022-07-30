import React, { useState, useEffect } from "react";
import Categories from "./components/Categories/Categories";
import { ListServiсe } from "./api/Serviсe";
import Tasks from "./components/Tasks/Tasks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { TodoContext } from './context'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useFetching } from "./hooks/useFetching.js";
import { TasksLoader, CategoriesLoader } from "./components/Loader/Loader";

function App() {
  const [lists, setLists] = useState([])
  const [chosenList, setChosenList] = useState([])
  const [fetchData, isLoading, error] = useFetching(async () => {
    const listResponse = await ListServiсe.getLists()
    setLists(listResponse)
    setChosenList(listResponse[0])
    navigate(`/lists/1`)
  })

  let location = useLocation()
  const currentPage = +location.pathname.split('/').slice(-1)
  let navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <TodoContext.Provider value={{
      lists,
      setLists,
      chosenList,
      setChosenList,
      currentPage,
      navigate,
    }} >

      <div className="app">
        {error ? <ErrorPage /> :
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
    </TodoContext.Provider>
  );
}

export default App;
