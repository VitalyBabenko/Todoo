import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Categories } from "./components/Categories/Categories";
import { Tasks } from "./components/Tasks/Tasks";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { appContext } from "./context";
import { useLocalStorage } from "./hooks/useLocalStorage";

const allTasks = {
  id: 0,
  title: "All tasks",
};

// TODO: emptyTasksPage

function App() {
  const [currentCategory, setCurrentCategory] = useState(allTasks);
  const [categories, setCategories] = useLocalStorage("categories", [allTasks]);
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/All tasks");
  }, []);

  return (
    <appContext.Provider
      value={{
        tasks,
        setTasks,
        categories,
        setCategories,
        currentCategory,
        setCurrentCategory,
      }}
    >
      <div className="app">
        <Categories />

        <Routes>
          <Route path="/:title" element={<Tasks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
}

export default App;
