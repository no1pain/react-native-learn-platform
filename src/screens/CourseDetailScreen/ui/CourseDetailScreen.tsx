import React, { useMemo } from "react";
import { useRoute } from "@react-navigation/native";
import CourseItem from "@/components/CourseItem/CourseItem";
import coursesData from "@/data/courses.json";
import mentorsData from "@/data/mentors.json";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface RouteParams {
  courseId: string;
}

const CourseDetailScreen = () => {
  const route = useRoute();
  const params = route.params as RouteParams;
  const navigation = useNavigation();

  console.log("CourseDetailScreen - Route params:", params);
  console.log("CourseDetailScreen - CourseId:", params?.courseId);
  console.log(
    "CourseDetailScreen - Available courses:",
    coursesData.courses.map((c) => c.id)
  );

  const courseData = useMemo(() => {
    if (!params?.courseId) {
      console.error("No courseId provided in route params");
      return null;
    }

    // First try to find the course by exact ID match
    let course = coursesData.courses.find((c) => c.id === params.courseId);

    // If not found, try to find by title (converted to kebab-case)
    if (!course) {
      console.log("Course not found by ID, trying to find by title");
      course = coursesData.courses.find(
        (c) => c.title.toLowerCase().replace(/\s+/g, "-") === params.courseId
      );
    }

    if (!course) {
      console.error(`Course with id ${params.courseId} not found`);
      return null;
    }

    console.log("CourseDetailScreen - Found course:", course);

    const mentorIndex = (parseInt(course.id) - 1) % mentorsData.mentors.length;
    const mentor = mentorsData.mentors[mentorIndex];

    const hours = 15 + (parseInt(course.id) % 15);
    const lessons = 10 + (parseInt(course.id) % 10);

    return {
      title: course.title,
      category: course.category,
      rating: course.rating,
      lessons: lessons,
      duration: `${hours} Hours`,
      price: course.price,
      image: course.image,
      id: course.id,
      description: `${
        course.category
      } is a popular profession that offers exciting career opportunities. This comprehensive course will teach you everything you need to know about ${course.title.toLowerCase()}. Join thousands of successful students who have transformed their careers through this course.`,
      instructor: {
        name: mentor.name,
        title: course.category,
        avatar: mentor.image,
        rating: mentor.rating,
        students: mentor.students,
        courses: mentor.courses,
      },
      features: [
        `${lessons} Lessons`,
        "Access Mobile, Desktop & TV",
        "Beginner Level",
        "Audio Book",
        "Lifetime Access",
        `${lessons * 5} Quizzes`,
        "Certificate of Completion",
      ],
      reviews: [
        {
          id: "1",
          user: {
            name: "Will Smith",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          },
          rating: 4.5,
          comment: `This ${course.category} course has been very useful. The instructor was well spoken and I totally loved it.`,
          likes: 578,
          date: "2 Weeks Ago",
        },
        {
          id: "2",
          user: {
            name: "Martha E. Thompson",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg",
          },
          rating: 4.5,
          comment: `Great course on ${course.title}. The content was well structured and the exercises were practical.`,
          likes: 423,
          date: "2 Weeks Ago",
        },
      ],
    };
  }, [params.courseId]);

  if (!courseData) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Course Not Found
        </Text>
        <Text style={{ textAlign: "center" }}>
          The course you're looking for could not be found. It may have been
          removed or the ID is incorrect.
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "#2B7A78",
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return <CourseItem {...courseData} />;
};

export default CourseDetailScreen;
