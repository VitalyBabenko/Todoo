import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { listsAPI } from "./service/ListsService";
import { tasksAPI } from "./service/TasksService";
import Categories from "./components/Categories/Categories";
import Tasks from "./components/Tasks/Tasks";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import CategoriesLoader from "./components/Categories/CategoriesLoader";
import TasksLoader from "./components/Tasks/TasksLoader";

function App() {
  let navigate = useNavigate();
  const {
    data: lists,
    isLoading: isListsLoading,
    isError,
  } = listsAPI.useFetchAllListsQuery("");
  const { isLoading: isTasksLoading } = tasksAPI.useFetchAllTasksQuery("");

  useEffect(() => {
    navigate("lists/all");
  }, []);

  if (isError) return <ErrorPage />;
  if (isListsLoading || isTasksLoading) {
    return (
      <div className="app">
        <CategoriesLoader />
        <TasksLoader />
      </div>
    );
  }

  return (
    <div className="app">
      <Categories />
      <Routes>
        <Route path="/lists/all" element={<Tasks />} />
        {lists.map((list) => (
          <Route key={list.id} path={`lists/${list.id}`} element={<Tasks />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
