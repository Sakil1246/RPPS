import React from "react";
import AuthForm from "./components/login_signUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/appStore";


function App() { 
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<AuthForm/>} />

     </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
