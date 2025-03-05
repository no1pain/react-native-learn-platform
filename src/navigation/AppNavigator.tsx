import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/ui/Login";
import HomeScreen from "../screens/HomeScreen/ui/HomeScreen";
import NotificationsScreen from "../screens/NotificationsScreen/ui/NotificationsScreen";
import CategoriesScreen from "../screens/CategoriesScreen/ui/CategoriesScreen";
import MentorsScreen from "../screens/MentorsScreen/ui/MentorsScreen";
import SignUp from "@/screens/SignUp/ui/SignUp";
import LoginWithYourAccount from "@/screens/LoginWithYourAccount/ui/LoginWithYourAccount";
import CoursesScreen from "../screens/CoursesScreen/ui/CoursesScreen";
import SearchScreen from "../screens/SearchScreen/ui/SearchScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen/ui/CourseDetailScreen";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Notifications: undefined;
  Categories: undefined;
  Mentors: undefined;
  Courses: undefined;
  LoginWithYourAccount: undefined;
  SignUp: undefined;
  Search: undefined;
  CourseDetail: { courseId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="LoginWithYourAccount"
          component={LoginWithYourAccount}
        />

        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Mentors" component={MentorsScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
