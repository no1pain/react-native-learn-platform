import React, { useMemo } from "react";
import { useRoute } from "@react-navigation/native";
import CourseItem from "@/components/CourseItem/CourseItem";
import coursesData from "@/data/courses.json";
import mentorsData from "@/data/mentors.json";

interface RouteParams {
  courseId: string;
}

const CourseDetailScreen = () => {
  const route = useRoute();
  const params = route.params as RouteParams;

  const courseData = useMemo(() => {
    const course = coursesData.courses.find((c) => c.id === params.courseId);
    if (!course) return null;

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
    return null;
  }

  return <CourseItem {...courseData} />;
};

export default CourseDetailScreen;
