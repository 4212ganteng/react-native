//Import Navigation Container
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddCategory from "./src/screen/AddCategory";
import ListTodo from "./src/screen/ListTodo";
import Login from "./src/screen/Login";
import { Main } from "./src/screen/Main";
import Register from "./src/screen/Register";
import Addlist from "./src/screen/Addlist";
// lotie animated
import Lottie from "lottie-react-native";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();
// Create Component Bottom Tab Navigation
const ThisTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="tab"
      screenOptions={({ route }) => ({
        // headerTitle: route.abc,
        headerTintColor: "red",
        // headerStyle: { backgroundColor: "red" },
        tabBarIcon: ({ focused, color, size }) => {
          let filepath;

          if (route.name === "Profile") {
            filepath = require("./src/components/assets/add.json");
          } else if (route.name === "Addlist") {
            filepath = require("./src/components/assets/add2.json");
          } else if (route.name === "Category") {
            filepath = require("./src/components/assets/kanan.json");
          }

          return <Lottie source={filepath} autoPlay={focused} loop />;
        },

        // tabBarActiveBackgroundColor: "green",
        tabBarInactiveBackgroundColor: "#ebebe0",
      })}
    >
      <Tab.Screen name="Profile" component={ListTodo} />
      <Tab.Screen name="Addlist" component={Addlist} />
      <Tab.Screen name="Category" component={AddCategory} />
    </Tab.Navigator>
  );
};

const Container = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Profile"
          component={ListTodo}
          options={{
            title: "List ToDo",
          }}
        /> */}

        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: "Welcome",
            headerShown: false,
            // headerStyle: { backgroundColor: "red" },
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          abc="aa"
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
          name="tab"
          component={ThisTab}
          options={{
            title: "Welcome",
            headerShown: false,
            // headerStyle: { backgroundColor: "red" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
