import { Routes, Route } from "react-router-dom";
import "../src/SCSS/all.scss";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
