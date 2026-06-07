import { Component } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses: Course[] = [
    {
      id: 1,
      title: 'Introduction to Angular',
      description: 'Learn the fundamentals of Angular including components, templates, and data binding.',
      instructor: 'Sarah Johnson',
    },
    {
      id: 2,
      title: 'Advanced TypeScript',
      description: 'Deep dive into TypeScript generics, decorators, and advanced type system features.',
      instructor: 'Michael Chen',
    },
    {
      id: 3,
      title: 'Web Development with HTML & CSS',
      description: 'Master modern HTML5 and CSS3 techniques for building responsive websites.',
      instructor: 'Emily Rodriguez',
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      description: 'Build scalable server-side applications using Node.js and Express framework.',
      instructor: 'David Kim',
    },
  ];

  selectedCourse: Course | null = null;

  selectCourse(course: Course): void {
    this.selectedCourse = course;
  }
}
