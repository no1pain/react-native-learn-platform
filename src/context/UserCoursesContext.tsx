import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the course type
export interface UserCourse {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  duration: string;
  completed: boolean;
}

interface UserCoursesContextType {
  userCourses: UserCourse[];
  enrollCourse: (course: UserCourse) => Promise<void>;
  removeCourse: (courseId: string) => Promise<void>;
  isEnrolled: (courseId: string) => boolean;
}

const UserCoursesContext = createContext<UserCoursesContextType | undefined>(
  undefined
);

export const UserCoursesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userCourses, setUserCourses] = useState<UserCourse[]>([]);

  // Load courses from AsyncStorage on mount
  useEffect(() => {
    const loadCourses = async () => {
      try {
        const storedCourses = await AsyncStorage.getItem("userCourses");
        if (storedCourses) {
          setUserCourses(JSON.parse(storedCourses));
        }
      } catch (error) {
        console.error("Failed to load courses from storage", error);
      }
    };

    loadCourses();
  }, []);

  // Save courses to AsyncStorage whenever they change
  useEffect(() => {
    const saveCourses = async () => {
      try {
        await AsyncStorage.setItem("userCourses", JSON.stringify(userCourses));
      } catch (error) {
        console.error("Failed to save courses to storage", error);
      }
    };

    saveCourses();
  }, [userCourses]);

  const enrollCourse = async (course: UserCourse) => {
    if (!isEnrolled(course.id)) {
      setUserCourses((prevCourses) => [...prevCourses, course]);
    }
  };

  const removeCourse = async (courseId: string) => {
    setUserCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseId)
    );
  };

  const isEnrolled = (courseId: string) => {
    return userCourses.some((course) => course.id === courseId);
  };

  return (
    <UserCoursesContext.Provider
      value={{ userCourses, enrollCourse, removeCourse, isEnrolled }}
    >
      {children}
    </UserCoursesContext.Provider>
  );
};

export const useUserCourses = () => {
  const context = useContext(UserCoursesContext);
  if (context === undefined) {
    throw new Error("useUserCourses must be used within a UserCoursesProvider");
  }
  return context;
};
