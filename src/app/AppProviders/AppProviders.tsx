import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserCoursesProvider } from "@/context/UserCoursesContext";

const queryClient = new QueryClient();

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserCoursesProvider>{children}</UserCoursesProvider>
    </QueryClientProvider>
  );
};

export default AppProviders;
