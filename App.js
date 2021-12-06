import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Login from "./pages/LoginPage/Login.page";
import SignUpUser from "./pages/SignUpPage/SignUp.page";
import Home from "./pages/HomePage/Home.page";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => <Login {...props} />}  
        </Stack.Screen>
        <Stack.Screen name="SignUp" options={{headerShown: false}}>
          {(props) => <SignUpUser {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home" options={{headerShown: false}}>
          {(props) => <Home {...props}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
