import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppProviders from "../AppProviders";
import AppNavigator from "@/navigation/AppNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProviders>
        <AppNavigator />
      </AppProviders>
    </SafeAreaProvider>
  );
};

export default App;
