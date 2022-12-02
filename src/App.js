import "./App.css";
import TaskForm from "./components/todolist/TaskForm";
import RegisterPage from "./components/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='form' element={<TaskForm />} />
          <Route path='*' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
