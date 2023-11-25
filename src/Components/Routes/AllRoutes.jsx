import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Authentication/HomePage";
import LoginPage from "../Authentication/LoginPage";
import Dashboard from "../Authentication/Dashboard";
import DebounceThrottle from "../Debouncing and Throttling/List";
import Todos from "../Todo List/Todos";
import DynamicForm from "../Dynamic Form/DynamicForm";
import NavHome from "../Navigation Menu/NavHome";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NavHome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/debounce" element={<DebounceThrottle />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="/dynamicform" element={<DynamicForm />} />
    </Routes>
  );
};

export default AllRoutes;
