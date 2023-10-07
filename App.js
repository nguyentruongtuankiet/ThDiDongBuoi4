import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome"; // Chọn loại biểu tượng muốn sử dụng

import _2a from "./View/_2a.js";
import _2b from "./View/_2b.js";
import _2c from "./View/_2c.js";
import Tiki_Ok from "./Tiki_Ok.js";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: true, // Tắt tiêu đề
  headerBackTitleVisible: true, // Tắt mũi tên điều hướng trở lại
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="_2a"
        screenOptions={screenOptions}
      >
        <Stack.Screen name="_2a" component={_2a} />
        <Stack.Screen name="_2b" component={_2b} />
        <Stack.Screen name="_2c" component={_2c} />
        <Stack.Screen name="Tiki_Ok" component={Tiki_Ok} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
