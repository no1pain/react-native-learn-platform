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
import { useAuth } from "@/shared/hooks/useAuth";
import MyCoursesScreen from "../screens/MyCoursesScreen/ui/MyCoursesScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen/ui/SettingsScreen";

type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

type AuthStackParamList = {
  Login: undefined;
  LoginWithYourAccount: undefined;
  SignUp: undefined;
};

type MainStackParamList = {
  Home: undefined;
  MyCourses: undefined;
  Notifications: undefined;
  Categories: undefined;
  Mentors: undefined;
  Courses: undefined;
  Search: undefined;
  CourseDetail: { courseId: string };
  Profile: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const MainStack = createNativeStackNavigator<MainStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="LoginWithYourAccount"
        component={LoginWithYourAccount}
      />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
      initialRouteName="Home"
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="MyCourses" component={MyCoursesScreen} />
      <MainStack.Screen name="Notifications" component={NotificationsScreen} />
      <MainStack.Screen name="Categories" component={CategoriesScreen} />
      <MainStack.Screen name="Mentors" component={MentorsScreen} />
      <MainStack.Screen name="Courses" component={CoursesScreen} />
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="CourseDetail" component={CourseDetailScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      <MainStack.Screen name="Settings" component={SettingsScreen} />
    </MainStack.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <RootStack.Screen name="Main" component={MainNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
