import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../src/stylesheets/all.scss";
import Layout from "./components/Layout";
import TodoList from "./components/TodoList";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { AuthContext } from "./components/Context";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, setToken, user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
            <Route path="todolist" element={<TodoList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
