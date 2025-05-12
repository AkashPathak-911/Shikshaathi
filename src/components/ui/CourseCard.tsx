import React from 'react';
import { Link } from '../Router';
import { Book, Clock, Award, Users } from 'lucide-react';

export interface CourseCardProps {
  id: string;
  title: string;
  subject: string;
  level: string;
  grade?: string;
  thumbnail: string;
  lessons: number;
  duration: string;
  instructor: string;
  enrolledCount: number;
  language: 'english' | 'nepali' | 'both';
}

export default function CourseCard({
  id,
  title,
  subject,
  level,
  grade,
  thumbnail,
  lessons,
  duration,
  instructor,
  enrolledCount,
  language
}: CourseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <Link to={`/course/${id}`} className="block h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <div className="flex space-x-2 mb-1">
              <span className="px-2 py-1 text-xs font-medium bg-blue-600 rounded">{level}</span>
              {grade && (
                <span className="px-2 py-1 text-xs font-medium bg-orange-500 rounded">Class {grade}</span>
              )}
              <span className="px-2 py-1 text-xs font-medium bg-emerald-600 rounded capitalize">{language}</span>
            </div>
            <h4 className="text-lg font-bold line-clamp-1">{title}</h4>
            <p className="text-sm text-gray-200 line-clamp-1">{subject}</p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="mt-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-1" />
                <span>{lessons} Lessons</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{duration}</span>
              </div>
            </div>
            
            <div className="mt-4 flex justify-between">
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{instructor}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1 text-gray-600 dark:text-gray-400" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{enrolledCount} students</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded text-sm font-medium transition-colors duration-200">
              View Course
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}