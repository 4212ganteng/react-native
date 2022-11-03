//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddCategory from "./src/screen/AddCategory";
import ListTodo from "./src/screen/ListTodo";
import Login from "./src/screen/Login";
import { Main } from "./src/screen/Main";
import Register from "./src/screen/Register";

const Container = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Welcome",
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ListTodo}
          options={{
            title: "Profile",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
