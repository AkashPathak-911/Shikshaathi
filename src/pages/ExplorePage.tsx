import React, { useState, useEffect } from 'react';
import CourseCard, { CourseCardProps } from '../components/ui/CourseCard';
import { ChevronDown, Filter, Search } from 'lucide-react';

export default function ExplorePage() {
  const [activeFilters, setActiveFilters] = useState({
    level: 'all',
    grade: 'all',
    subject: 'all',
    language: 'all',
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState<CourseCardProps[]>([]);
  
  // Mock courses data
  const courses: CourseCardProps[] = [
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
    },
    {
      id: '5',
      title: 'English Literature for Class 12',
      subject: 'English',
      level: 'School',
      grade: '12',
      thumbnail: 'https://images.pexels.com/photos/3059750/pexels-photo-3059750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 30,
      duration: '20 hours',
      instructor: 'Anita Sharma',
      enrolledCount: 720,
      language: 'english'
    },
    {
      id: '6',
      title: 'Nepali Grammar and Literature',
      subject: 'Nepali',
      level: 'School',
      grade: '11',
      thumbnail: 'https://images.pexels.com/photos/256517/pexels-photo-256517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 28,
      duration: '22 hours',
      instructor: 'Ramesh K.C.',
      enrolledCount: 645,
      language: 'nepali'
    },
    {
      id: '7',
      title: 'Data Structures and Algorithms',
      subject: 'Computer Science',
      level: 'Bachelor',
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 40,
      duration: '32 hours',
      instructor: 'Dr. Binod Ghimire',
      enrolledCount: 890,
      language: 'english'
    },
    {
      id: '8',
      title: 'MBBS Entrance Preparation',
      subject: 'Medical',
      level: 'Entrance',
      thumbnail: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      lessons: 72,
      duration: '55 hours',
      instructor: 'Dr. Sushila Koirala',
      enrolledCount: 1840,
      language: 'both'
    }
  ];
  
  // Filter options
  const filterOptions = {
    level: ['all', 'School', 'Entrance', 'Bachelor'],
    grade: ['all', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    subject: ['all', 'Science', 'Mathematics', 'English', 'Nepali', 'Computer Science', 'Medical', 'Multi-subject'],
    language: ['all', 'english', 'nepali', 'both']
  };
  
  // Apply filters
  useEffect(() => {
    let result = [...courses];
    
    // Filter by level
    if (activeFilters.level !== 'all') {
      result = result.filter(course => course.level === activeFilters.level);
    }
    
    // Filter by grade
    if (activeFilters.grade !== 'all') {
      result = result.filter(course => course.grade === activeFilters.grade);
    }
    
    // Filter by subject
    if (activeFilters.subject !== 'all') {
      result = result.filter(course => course.subject === activeFilters.subject);
    }
    
    // Filter by language
    if (activeFilters.language !== 'all') {
      result = result.filter(course => course.language === activeFilters.language);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(query) || 
          course.subject.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query)
      );
    }
    
    setFilteredCourses(result);
  }, [activeFilters, searchQuery]);
  
  // Handle filter change
  const handleFilterChange = (category: string, value: string) => {
    setActiveFilters({
      ...activeFilters,
      [category]: value
    });
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  // Reset all filters
  const resetFilters = () => {
    setActiveFilters({
      level: 'all',
      grade: 'all',
      subject: 'all',
      language: 'all',
    });
    setSearchQuery('');
  };
  
  // Get page title based on filters
  const getPageTitle = () => {
    if (activeFilters.level !== 'all') {
      if (activeFilters.subject !== 'all') {
        return `${activeFilters.subject} Courses for ${activeFilters.level} Level`;
      }
      return `${activeFilters.level} Level Courses`;
    }
    return 'All Courses';
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {getPageTitle()}
        </h1>
        
        {/* Search and filter section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <button 
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={resetFilters}
            >
              <Filter className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
              Reset Filters
            </button>
          </div>
          
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Level filter */}
            <div>
              <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Education Level
              </label>
              <div className="relative">
                <select
                  id="level-filter"
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeFilters.level}
                  onChange={(e) => handleFilterChange('level', e.target.value)}
                >
                  {filterOptions.level.map((level) => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Grade filter */}
            <div>
              <label htmlFor="grade-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Grade/Class
              </label>
              <div className="relative">
                <select
                  id="grade-filter"
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeFilters.grade}
                  onChange={(e) => handleFilterChange('grade', e.target.value)}
                >
                  {filterOptions.grade.map((grade) => (
                    <option key={grade} value={grade}>
                      {grade === 'all' ? 'All Grades' : `Class ${grade}`}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Subject filter */}
            <div>
              <label htmlFor="subject-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Subject
              </label>
              <div className="relative">
                <select
                  id="subject-filter"
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeFilters.subject}
                  onChange={(e) => handleFilterChange('subject', e.target.value)}
                >
                  {filterOptions.subject.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject === 'all' ? 'All Subjects' : subject}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Language filter */}
            <div>
              <label htmlFor="language-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Language
              </label>
              <div className="relative">
                <select
                  id="language-filter"
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={activeFilters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                >
                  {filterOptions.language.map((language) => (
                    <option key={language} value={language}>
                      {language === 'all' ? 'All Languages' : language.charAt(0).toUpperCase() + language.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Showing <span className="font-medium">{filteredCourses.length}</span> results
            </p>
            
            <div className="relative">
              <select
                className="block w-full pl-3 pr-10 py-2 text-sm border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                defaultValue="popularity"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="newest">Sort by Newest</option>
                <option value="price-low">Sort by Student Count (Low to High)</option>
                <option value="price-high">Sort by Student Count (High to Low)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">No courses found matching your criteria.</p>
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}