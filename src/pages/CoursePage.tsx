import React, { useState } from 'react';
import { BookOpen, Users, Calendar, Clock, Award, Star, VideoIcon, FileText, ListChecks, ChevronDown, ChevronRight, Play } from 'lucide-react';

export default function CoursePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'section-1': true,
  });
  
  // Mock course data
  const course = {
    id: '1',
    title: 'Science for SEE Preparation',
    subject: 'Science',
    level: 'School',
    grade: '10',
    thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    lessons: 45,
    duration: '30 hours',
    instructor: {
      name: 'Rajesh Sharma',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Experienced science teacher with 15 years of teaching experience in Nepal\'s top schools. Former SEE examiner.',
      qualification: 'M.Sc. in Physics, B.Ed.',
    },
    enrolledCount: 1240,
    language: 'nepali',
    rating: 4.8,
    reviewCount: 342,
    updatedAt: 'Last updated on May 10, 2025',
    description: `This comprehensive Science course is designed specifically for SEE (Secondary Education Examination) students in Nepal. It covers the entire Class 10 Science curriculum as prescribed by the Nepal government.

The course breaks down complex scientific concepts into easy-to-understand lessons, with practical demonstrations and real-life examples. Each chapter includes practice questions that mirror the SEE examination pattern.

By the end of this course, students will have a thorough understanding of all Science topics and be well-prepared for their SEE examinations.`,
    features: [
      'Complete coverage of Class 10 Science curriculum',
      'Video lectures with animations and demonstrations',
      'Chapter-wise notes and summaries',
      'Practice questions after each lesson',
      'Mock tests based on SEE examination pattern',
      'Doubt-clearing sessions',
      '24/7 access to course material',
    ],
    sections: [
      {
        id: 'section-1',
        title: 'Introduction to Science',
        lessons: [
          { id: 'lesson-1-1', title: 'Course Overview', type: 'video', duration: '10:25', isPreview: true },
          { id: 'lesson-1-2', title: 'Scientific Method', type: 'video', duration: '15:30', isPreview: false },
          { id: 'lesson-1-3', title: 'Introduction Notes', type: 'pdf', isPreview: false },
          { id: 'lesson-1-4', title: 'Basic Concepts Quiz', type: 'quiz', isPreview: false },
        ]
      },
      {
        id: 'section-2',
        title: 'Physics: Force and Motion',
        lessons: [
          { id: 'lesson-2-1', title: 'Newton\'s Laws of Motion', type: 'video', duration: '22:15', isPreview: false },
          { id: 'lesson-2-2', title: 'Gravitation', type: 'video', duration: '18:40', isPreview: false },
          { id: 'lesson-2-3', title: 'Simple Machines', type: 'video', duration: '24:05', isPreview: false },
          { id: 'lesson-2-4', title: 'Force and Motion Notes', type: 'pdf', isPreview: false },
          { id: 'lesson-2-5', title: 'Practice Problems', type: 'pdf', isPreview: false },
          { id: 'lesson-2-6', title: 'Physics Chapter Quiz', type: 'quiz', isPreview: false },
        ]
      },
      {
        id: 'section-3',
        title: 'Chemistry: Matter and Elements',
        lessons: [
          { id: 'lesson-3-1', title: 'Atomic Structure', type: 'video', duration: '20:30', isPreview: false },
          { id: 'lesson-3-2', title: 'Periodic Table', type: 'video', duration: '25:15', isPreview: false },
          { id: 'lesson-3-3', title: 'Chemical Bonding', type: 'video', duration: '19:45', isPreview: false },
          { id: 'lesson-3-4', title: 'Chemistry Notes', type: 'pdf', isPreview: false },
          { id: 'lesson-3-5', title: 'Chemistry Chapter Quiz', type: 'quiz', isPreview: false },
        ]
      },
      {
        id: 'section-4',
        title: 'Biology: Living Organisms',
        lessons: [
          { id: 'lesson-4-1', title: 'Cell Structure', type: 'video', duration: '23:10', isPreview: false },
          { id: 'lesson-4-2', title: 'Plant Systems', type: 'video', duration: '26:25', isPreview: false },
          { id: 'lesson-4-3', title: 'Human Body Systems', type: 'video', duration: '28:30', isPreview: false },
          { id: 'lesson-4-4', title: 'Biology Notes', type: 'pdf', isPreview: false },
          { id: 'lesson-4-5', title: 'Biology Practice Questions', type: 'pdf', isPreview: false },
          { id: 'lesson-4-6', title: 'Biology Chapter Quiz', type: 'quiz', isPreview: false },
        ]
      },
      {
        id: 'section-5',
        title: 'Final Exam Preparation',
        lessons: [
          { id: 'lesson-5-1', title: 'Revision Strategies', type: 'video', duration: '15:15', isPreview: false },
          { id: 'lesson-5-2', title: 'Important Questions', type: 'pdf', isPreview: false },
          { id: 'lesson-5-3', title: 'Full Mock Test 1', type: 'quiz', isPreview: false },
          { id: 'lesson-5-4', title: 'Full Mock Test 2', type: 'quiz', isPreview: false },
          { id: 'lesson-5-5', title: 'Exam Tips and Tricks', type: 'video', duration: '12:40', isPreview: false },
        ]
      }
    ]
  };
  
  // Toggle section expansion
  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  // Count total lessons and videos
  const totalLessons = course.sections.reduce((sum, section) => sum + section.lessons.length, 0);
  const totalVideos = course.sections.reduce((sum, section) => 
    sum + section.lessons.filter(lesson => lesson.type === 'video').length, 0);
  
  // Get lesson type icon
  const getLessonTypeIcon = (type: string) => {
    switch(type) {
      case 'video':
        return <VideoIcon className="h-4 w-4 text-blue-500" />;
      case 'pdf':
        return <FileText className="h-4 w-4 text-red-500" />;
      case 'quiz':
        return <ListChecks className="h-4 w-4 text-purple-500" />;
      default:
        return <BookOpen className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-16">
      {/* Course hero section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center space-x-2 text-sm text-blue-400">
                <span>{course.level}</span>
                <span>•</span>
                <span>{course.subject}</span>
                {course.grade && (
                  <>
                    <span>•</span>
                    <span>Class {course.grade}</span>
                  </>
                )}
              </div>
              
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold">{course.title}</h1>
              
              <p className="mt-4 text-gray-300 max-w-2xl">{course.description.split('\n\n')[0]}</p>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="font-medium text-white">{course.rating}</span>
                  <span className="ml-1">({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-400 mr-1" />
                  <span>{course.enrolledCount} students enrolled</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-1" />
                  <span>{course.updatedAt}</span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center">
                <img 
                  src={course.instructor.avatar} 
                  alt={course.instructor.name} 
                  className="h-10 w-10 rounded-full mr-3" 
                />
                <div>
                  <p className="text-sm text-gray-400">Instructor</p>
                  <p className="font-medium">{course.instructor.name}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-9/16">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="absolute w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-lg">
                        <span className="font-bold text-gray-900 dark:text-white">Free</span>
                        <span className="ml-2 line-through text-gray-500 text-sm">रु 2000</span>
                      </div>
                      <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-2 py-1 rounded">
                        Limited Time Offer
                      </span>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-medium transition-colors duration-200">
                      Enroll Now - Free Access
                    </button>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                      <div className="flex items-center">
                        <BookOpen className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{totalLessons} lessons</span>
                      </div>
                      <div className="flex items-center">
                        <VideoIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{totalVideos} videos</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">{course.duration} total length</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">Certificate of completion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-800 mb-8">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`pb-4 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`pb-4 font-medium text-sm ${
                    activeTab === 'curriculum'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  Curriculum
                </button>
                <button
                  onClick={() => setActiveTab('instructor')}
                  className={`pb-4 font-medium text-sm ${
                    activeTab === 'instructor'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  Instructor
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'border-b-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  Reviews
                </button>
              </nav>
            </div>
            
            {/* Tab content */}
            <div>
              {/* Overview tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About This Course</h2>
                  <div className="prose prose-blue dark:prose-invert max-w-none">
                    {course.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">{paragraph}</p>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="ml-2 text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Curriculum tab */}
              {activeTab === 'curriculum' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Content</h2>
                    <div className="text-sm text-gray-700 dark:text-gray-300">
                      <span>{course.sections.length} sections</span>
                      <span className="mx-2">•</span>
                      <span>{totalLessons} lessons</span>
                      <span className="mx-2">•</span>
                      <span>{course.duration} total length</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {course.sections.map((section) => (
                      <div key={section.id} className="border border-gray-200 dark:border-gray-800 rounded-md overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 text-left"
                          onClick={() => toggleSection(section.id)}
                        >
                          <div className="flex items-center">
                            {expandedSections[section.id] ? (
                              <ChevronDown className="h-5 w-5 text-gray-500 mr-2" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-gray-500 mr-2" />
                            )}
                            <span className="font-medium text-gray-900 dark:text-white">{section.title}</span>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {section.lessons.length} lessons
                          </div>
                        </button>
                        
                        {expandedSections[section.id] && (
                          <div className="divide-y divide-gray-200 dark:divide-gray-800">
                            {section.lessons.map((lesson) => (
                              <div key={lesson.id} className="p-4 flex justify-between items-center">
                                <div className="flex items-center">
                                  {getLessonTypeIcon(lesson.type)}
                                  <span className="ml-3 text-gray-800 dark:text-gray-200">
                                    {lesson.title}
                                    {lesson.isPreview && (
                                      <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                        Preview
                                      </span>
                                    )}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  {lesson.duration && (
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                      {lesson.duration}
                                    </span>
                                  )}
                                  <button 
                                    className={`ml-4 p-1 rounded-full ${
                                      lesson.isPreview
                                        ? 'text-blue-600 hover:bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-900/30'
                                        : 'text-gray-400 cursor-not-allowed'
                                    }`}
                                  >
                                    <Play className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Instructor tab */}
              {activeTab === 'instructor' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Meet Your Instructor</h2>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name} 
                      className="h-24 w-24 rounded-full mb-4 sm:mb-0 sm:mr-6 object-cover" 
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{course.instructor.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{course.instructor.qualification}</p>
                      
                      <div className="mt-2 flex items-center">
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <Star className="h-5 w-5 text-yellow-400" />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">5.0 Instructor Rating</span>
                      </div>
                      
                      <div className="mt-2 flex items-center">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">3,580 Students</span>
                      </div>
                      
                      <div className="mt-2 flex items-center">
                        <VideoIcon className="h-5 w-5 text-gray-500" />
                        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">14 Courses</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About the Instructor</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {course.instructor.bio}
                    </p>
                  </div>
                </div>
              )}
              
              {/* Reviews tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="flex-shrink-0 flex flex-col items-center justify-center mb-6 md:mb-0 md:mr-8">
                      <div className="text-5xl font-bold text-gray-900 dark:text-white">{course.rating}</div>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                            fill={i < Math.floor(course.rating) ? 'currentColor' : 'none'} 
                          />
                        ))}
                      </div>
                      <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Course Rating</div>
                    </div>
                    
                    <div className="w-full">
                      <div className="space-y-2">
                        {[5, 4, 3, 2, 1].map((star) => {
                          // Calculate percentage for the progress bar (mock data)
                          const percentage = star === 5 ? 78 : star === 4 ? 15 : star === 3 ? 5 : star === 2 ? 1 : 1;
                          
                          return (
                            <div key={star} className="flex items-center">
                              <div className="flex items-center w-16">
                                <span className="text-sm text-gray-700 dark:text-gray-300 mr-1">{star}</span>
                                <Star className="h-4 w-4 text-yellow-400" />
                              </div>
                              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-yellow-400" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <div className="w-12 text-right text-sm text-gray-600 dark:text-gray-400">
                                {percentage}%
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mb-10">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200">
                      Write a Review
                    </button>
                  </div>
                  
                  {/* Sample reviews */}
                  <div className="space-y-8">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0">
                        <div className="flex items-start">
                          <img 
                            src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${20 + i}.jpg`} 
                            alt="Reviewer" 
                            className="h-10 w-10 rounded-full mr-4" 
                          />
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {i === 0 ? 'Aarav Poudel' : i === 1 ? 'Sita Gurung' : 'Bipin Shrestha'}
                            </h4>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, j) => (
                                  <Star 
                                    key={j} 
                                    className={`h-4 w-4 ${j < 5 - (i % 2) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                {i === 0 ? '2 months ago' : i === 1 ? '1 month ago' : '2 weeks ago'}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 text-gray-700 dark:text-gray-300">
                          {i === 0 ? (
                            'This course helped me score an A+ in my SEE science exam! The teacher explains complex topics in a very simple way. I especially liked the video demonstrations for physics concepts.'
                          ) : i === 1 ? (
                            'Very comprehensive course with excellent notes and practice questions. The mock tests are particularly helpful as they closely resemble the actual SEE question pattern.'
                          ) : (
                            'Highly recommended for all Class 10 students. The instructor is very knowledgeable and responds quickly to questions. The video quality is excellent and the explanations are clear.'
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                      Load More Reviews
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Related Courses</h3>
              
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0">
                    <div className="flex-shrink-0 w-20 h-16 rounded overflow-hidden mr-4">
                      <img 
                        src={`https://images.pexels.com/photos/${3861958 + i * 100}/pexels-photo-${3861958 + i * 100}.jpeg?auto=compress&cs=tinysrgb&w=300`} 
                        alt="Course thumbnail" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-2">
                        {i === 0 
                          ? 'Mathematics for SEE Preparation' 
                          : i === 1 
                            ? 'English Grammar and Composition' 
                            : 'Computer Science Basics'
                        }
                      </h4>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star 
                              key={j} 
                              className="h-3 w-3 text-yellow-400" 
                            />
                          ))}
                        </div>
                        <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                          {4.7 + i * 0.1}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-blue-600 dark:text-blue-400">Free</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Science', 'Mathematics', 'English', 'Nepali', 'Computer Science', 'Social Studies'].map((category, i) => (
                    <button 
                      key={i}
                      className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-150"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}