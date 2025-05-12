import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Book, Award, Clock, BarChart, Settings, BookOpen, Video, ListChecks } from 'lucide-react';

export default function ProfilePage() {
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: '1',
      title: 'Science for SEE Preparation',
      thumbnail: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300',
      progress: 68,
      lastAccessed: '2 days ago'
    },
    {
      id: '2',
      title: 'Mathematics for Class 9',
      thumbnail: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=300',
      progress: 34,
      lastAccessed: '1 week ago'
    },
    {
      id: '3',
      title: 'English Grammar and Composition',
      thumbnail: 'https://images.pexels.com/photos/3059750/pexels-photo-3059750.jpeg?auto=compress&cs=tinysrgb&w=300',
      progress: 12,
      lastAccessed: '3 weeks ago'
    }
  ];
  
  // Mock data for achievements
  const achievements = [
    {
      id: '1',
      title: 'Quick Learner',
      description: 'Completed 5 lessons in a single day',
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      date: 'May 12, 2025'
    },
    {
      id: '2',
      title: 'Perfect Score',
      description: 'Scored 100% on a quiz',
      icon: <Award className="h-10 w-10 text-blue-500" />,
      date: 'May 10, 2025'
    },
    {
      id: '3',
      title: 'Dedicated Student',
      description: 'Logged in for 5 consecutive days',
      icon: <Award className="h-10 w-10 text-green-500" />,
      date: 'May 8, 2025'
    }
  ];
  
  // Mock data for activity
  const recentActivity = [
    {
      id: '1',
      type: 'video',
      title: 'Watched "Newton\'s Laws of Motion"',
      course: 'Science for SEE Preparation',
      timestamp: 'Today, 10:24 AM'
    },
    {
      id: '2',
      type: 'quiz',
      title: 'Completed "Basic Concepts Quiz"',
      course: 'Science for SEE Preparation',
      score: '8/10',
      timestamp: 'Yesterday, 4:15 PM'
    },
    {
      id: '3',
      type: 'pdf',
      title: 'Downloaded "Force and Motion Notes"',
      course: 'Science for SEE Preparation',
      timestamp: 'Yesterday, 2:30 PM'
    },
    {
      id: '4',
      type: 'course',
      title: 'Enrolled in "Mathematics for Class 9"',
      timestamp: 'May 15, 2025, 11:20 AM'
    }
  ];
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Please log in to view your profile
          </h2>
          <button
            onClick={() => window.location.href = '/login'}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden sticky top-20">
              <div className="p-6 text-center">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-24 w-24 rounded-full mx-auto"
                  />
                ) : (
                  <div className="h-24 w-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    {user?.name.charAt(0)}
                  </div>
                )}
                
                <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {user?.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {user?.role}
                  {user?.grade && ` - Class ${user.grade}`}
                </p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                        activeTab === 'dashboard'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <BarChart className={`h-5 w-5 mr-3 ${
                        activeTab === 'dashboard'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`} />
                      Dashboard
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                        activeTab === 'courses'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <Book className={`h-5 w-5 mr-3 ${
                        activeTab === 'courses'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`} />
                      My Courses
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('achievements')}
                      className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                        activeTab === 'achievements'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <Award className={`h-5 w-5 mr-3 ${
                        activeTab === 'achievements'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`} />
                      Achievements
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('account')}
                      className={`w-full flex items-center px-6 py-3 text-sm font-medium ${
                        activeTab === 'account'
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <Settings className={`h-5 w-5 mr-3 ${
                        activeTab === 'account'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`} />
                      Account Settings
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="mt-8 lg:mt-0 lg:col-span-9">
            {/* Dashboard tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h2>
                
                {/* Stats */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <BookOpen className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Enrolled Courses
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                3
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Clock className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Learning Hours
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                12.5
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Award className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                              Achievements
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900 dark:text-white">
                                3
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Recent progress and activity */}
                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* Recent courses progress */}
                  <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Course Progress</h3>
                      <div className="mt-6 flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                          {enrolledCourses.map((course) => (
                            <li key={course.id} className="py-4">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-16 w-16 rounded overflow-hidden">
                                  <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                                </div>
                                <div className="ml-4 flex-1">
                                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {course.title}
                                  </div>
                                  <div className="mt-1 relative">
                                    <div className="flex items-center">
                                      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <div
                                          className="bg-blue-600 h-2 rounded-full"
                                          style={{ width: `${course.progress}%` }}
                                        ></div>
                                      </div>
                                      <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                                        {course.progress}%
                                      </span>
                                    </div>
                                  </div>
                                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    Last accessed {course.lastAccessed}
                                  </div>
                                </div>
                                <div className="ml-4">
                                  <button className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-150">
                                    Continue
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-center">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                          View All Courses
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Recent activity */}
                  <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Recent Activity</h3>
                      <div className="mt-6 flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                          {recentActivity.map((activity) => (
                            <li key={activity.id} className="py-4">
                              <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                  {activity.type === 'video' && <Video className="h-5 w-5 text-blue-500" />}
                                  {activity.type === 'quiz' && <ListChecks className="h-5 w-5 text-purple-500" />}
                                  {activity.type === 'pdf' && <BookOpen className="h-5 w-5 text-red-500" />}
                                  {activity.type === 'course' && <Book className="h-5 w-5 text-green-500" />}
                                </div>
                                <div className="ml-3 flex-1">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    {activity.title}
                                  </p>
                                  {activity.course && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                      {activity.course}
                                      {activity.score && ` • Score: ${activity.score}`}
                                    </p>
                                  )}
                                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                    {activity.timestamp}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-center">
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 shadow-sm text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150">
                          View All Activity
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Courses tab */}
            {activeTab === 'courses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Courses</h2>
                  <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Browse New Courses
                  </button>
                </div>
                
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                  <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="p-6">
                        <div className="lg:flex lg:items-center lg:justify-between">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 h-20 w-20 rounded overflow-hidden">
                              <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                            </div>
                            <div className="ml-4">
                              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{course.title}</h3>
                              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                                <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400 dark:text-gray-500" />
                                <p>Last accessed {course.lastAccessed}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 flex lg:mt-0 lg:ml-4 space-x-3">
                            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              Continue Course
                            </button>
                            <button className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="mt-6">
                          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Progress</h4>
                          <div className="mt-2 relative">
                            <div className="flex items-center">
                              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                                {course.progress}% complete
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Achievements tab */}
            {activeTab === 'achievements' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Achievements</h2>
                
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
                  <div className="p-6">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 text-center transition-transform transform hover:scale-105">
                          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 p-3 mb-4">
                            {achievement.icon}
                          </div>
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{achievement.title}</h3>
                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{achievement.description}</p>
                          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Earned on {achievement.date}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Upcoming Achievements</h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Award className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Completion Master</h4>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Complete your first course</p>
                            <div className="mt-2 relative">
                              <div className="flex items-center">
                                <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 w-48">
                                  <div
                                    className="bg-blue-600 h-1.5 rounded-full"
                                    style={{ width: '70%' }}
                                  ></div>
                                </div>
                                <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                                  70%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <Award className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Quiz Champion</h4>
                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Score 100% on 5 different quizzes</p>
                            <div className="mt-2 relative">
                              <div className="flex items-center">
                                <div className="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 w-48">
                                  <div
                                    className="bg-blue-600 h-1.5 rounded-full"
                                    style={{ width: '20%' }}
                                  ></div>
                                </div>
                                <span className="ml-3 text-xs text-gray-500 dark:text-gray-400">
                                  20%
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Account settings tab */}
            {activeTab === 'account' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
                
                <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                  <form>
                    <div className="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
                      {/* Profile section */}
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Profile</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          This information will be displayed publicly
                        </p>

                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                          <div className="sm:col-span-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                defaultValue={user?.name}
                                className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                              />
                            </div>
                          </div>
                          
                          <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Email
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                defaultValue={user?.email}
                                className="block w-full pl-10 pr-12 sm:text-sm border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                              />
                            </div>
                          </div>
                          
                          <div className="sm:col-span-6">
                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                              Profile Photo
                            </label>
                            <div className="mt-1 flex items-center">
                              {user?.avatar ? (
                                <img
                                  src={user.avatar}
                                  alt={user.name}
                                  className="h-12 w-12 rounded-full"
                                />
                              ) : (
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                                  {user?.name.charAt(0)}
                                </div>
                              )}
                              <button
                                type="button"
                                className="ml-5 bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                Change
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Notification settings */}
                      <div className="pt-8">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Notifications</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          We'll always let you know about important changes, but you can choose what else you want to hear about.
                        </p>
                        
                        <div className="mt-6">
                          <fieldset>
                            <legend className="text-base font-medium text-gray-900 dark:text-white">By Email</legend>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    defaultChecked
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments" className="font-medium text-gray-700 dark:text-gray-300">Course updates</label>
                                  <p className="text-gray-500 dark:text-gray-400">Get notified when a course you are enrolled in is updated.</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    defaultChecked
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="candidates" className="font-medium text-gray-700 dark:text-gray-300">New courses</label>
                                  <p className="text-gray-500 dark:text-gray-400">Get notified when new courses related to your interests are added.</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    defaultChecked
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 dark:border-gray-700 rounded"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="offers" className="font-medium text-gray-700 dark:text-gray-300">Promotions</label>
                                  <p className="text-gray-500 dark:text-gray-400">Get notified about special offers, discounts, and promotions.</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 flex justify-end">
                      <button
                        type="button"
                        className="bg-white dark:bg-gray-800 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}