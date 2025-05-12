import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import CourseCard, { CourseCardProps } from '../components/ui/CourseCard';
import ResourceCard, { ResourceCardProps } from '../components/ui/ResourceCard';
import { Link } from '../components/Router';
import { ChevronRight, Sparkles, BookOpen, GraduationCap, PenTool } from 'lucide-react';

export default function HomePage() {
  // Mock data for featured courses
  const featuredCourses: CourseCardProps[] = [
    {
      id: '1',
      title: 'Science for SEE Preparation',
      subject: 'Science',
      level: 'School',
      grade: '10',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 45,
      duration: '30 hours',
      instructor: 'Rajesh Sharma',
      enrolledCount: 1240,
      language: 'nepali'
    },
    {
      id: '2',
      title: 'Mathematics for Class 9',
      subject: 'Mathematics',
      level: 'School',
      grade: '9',
      thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 36,
      duration: '25 hours',
      instructor: 'Sarita Poudel',
      enrolledCount: 850,
      language: 'nepali'
    },
    {
      id: '3',
      title: 'Programming in Python for BCA',
      subject: 'Computer Science',
      level: 'Bachelor',
      thumbnail: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 24,
      duration: '18 hours',
      instructor: 'Dr. Amit Joshi',
      enrolledCount: 675,
      language: 'english'
    },
    {
      id: '4',
      title: 'Engineering Entrance Preparation',
      subject: 'Multi-subject',
      level: 'Entrance',
      thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 60,
      duration: '45 hours',
      instructor: 'Prof. Sanjay Singh',
      enrolledCount: 1560,
      language: 'both'
    }
  ];
  
  // Mock data for recent resources
  const recentResources: ResourceCardProps[] = [
    {
      id: '101',
      title: 'Class 12 Physics Notes - Electromagnetic Induction',
      type: 'notes',
      subject: 'Physics',
      level: 'School',
      grade: '12',
      language: 'english',
      dateAdded: 'May 15, 2025',
      views: 2430,
      downloads: 1280
    },
    {
      id: '102',
      title: 'MBBS Entrance Model Question Paper',
      type: 'pdf',
      subject: 'Medical',
      level: 'Entrance',
      language: 'english',
      dateAdded: 'May 12, 2025',
      views: 1867,
      downloads: 954
    },
    {
      id: '103',
      title: 'Data Structures and Algorithms - Video Lecture',
      type: 'video',
      subject: 'Computer Science',
      thumbnail: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      level: 'Bachelor',
      language: 'english',
      dateAdded: 'May 10, 2025',
      views: 789
    }
  ];
  
  // Education levels for quick navigation
  const educationLevels = [
    {
      name: 'Primary School',
      description: 'Class 1-5',
      icon: <BookOpen className="h-6 w-6" />,
      path: '/explore?level=primary'
    },
    {
      name: 'Secondary School',
      description: 'Class 6-10 (SEE)',
      icon: <PenTool className="h-6 w-6" />,
      path: '/explore?level=secondary'
    },
    {
      name: 'Higher Secondary',
      description: 'Class 11-12 (+2)',
      icon: <GraduationCap className="h-6 w-6" />,
      path: '/explore?level=higher-secondary'
    },
    {
      name: 'Bachelor Level',
      description: 'CSIT, BCA, BBS, etc.',
      icon: <Sparkles className="h-6 w-6" />,
      path: '/explore?level=bachelor'
    }
  ];

  return (
    <div>
      <HeroSection />
      
      {/* Education Levels */}
      <section className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Choose Your Education Level
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationLevels.map((level, idx) => (
              <Link 
                key={idx} 
                to={level.path}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center group hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800"
              >
                <div className="flex justify-center items-center w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white transition-colors duration-300">
                  {level.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {level.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {level.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Courses
            </h2>
            <Link 
              to="/explore" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View all courses <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Recent Resources */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Recent Resources
            </h2>
            <Link 
              to="/resources" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
            >
              View all resources <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentResources.map((resource) => (
              <ResourceCard key={resource.id} {...resource} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to action */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to start learning?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of Nepali students improving their academic performance with our comprehensive learning resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
            >
              Register Now
            </Link>
            <Link
              to="/explore"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-blue-800"
            >
              Explore Content
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}