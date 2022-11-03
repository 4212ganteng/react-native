import React from "react";
import { NativeBaseProvider } from "native-base";

import { Main } from "./src/screen/Main";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import ListTodo from "./src/screen/ListTodo";
import AddCategory from "./src/screen/AddCategory";
import Addlist from "./src/screen/Addlist";
import Container from "./Container";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      <Container />
    </NativeBaseProvider>
  );
}
