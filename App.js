import React from "react";
import { NativeBaseProvider } from "native-base";

import { Main } from "./src/screen/Main";
import Login from "./src/screen/Login";
import Register from "./src/screen/Register";
import ListTodo from "./src/screen/ListTodo";

// extend the theme

export default function App() {
  return (
    <NativeBaseProvider>
      {/* <Main /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      <ListTodo />
    </NativeBaseProvider>
  );
}
