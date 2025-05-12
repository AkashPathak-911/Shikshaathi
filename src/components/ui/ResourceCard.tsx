import React from 'react';
import { Link } from '../Router';
import { File, Video, FileText, ListChecks } from 'lucide-react';

export interface ResourceCardProps {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'notes' | 'quiz';
  subject: string;
  thumbnail?: string;
  grade?: string;
  level: string;
  language: 'english' | 'nepali' | 'both';
  dateAdded: string;
  views: number;
  downloads?: number;
}

export default function ResourceCard({
  id,
  title,
  type,
  subject,
  thumbnail,
  grade,
  level,
  language,
  dateAdded,
  views,
  downloads
}: ResourceCardProps) {
  const getIconByType = () => {
    switch(type) {
      case 'pdf':
        return <File className="h-10 w-10 text-red-500" />;
      case 'video':
        return <Video className="h-10 w-10 text-blue-500" />;
      case 'notes':
        return <FileText className="h-10 w-10 text-green-500" />;
      case 'quiz':
        return <ListChecks className="h-10 w-10 text-purple-500" />;
      default:
        return <File className="h-10 w-10 text-gray-500" />;
    }
  };
  
  const getColorByType = () => {
    switch(type) {
      case 'pdf':
        return 'bg-red-100 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'video':
        return 'bg-blue-100 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'notes':
        return 'bg-green-100 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'quiz':
        return 'bg-purple-100 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className={`rounded-lg border ${getColorByType()} p-4 transition-all duration-300 hover:shadow-md`}>
      <div className="flex">
        <div className="flex-shrink-0 mr-4">
          {thumbnail ? (
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-16 h-16 object-cover rounded"
            />
          ) : (
            <div className="w-16 h-16 flex items-center justify-center">
              {getIconByType()}
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <Link to={`/resource/${id}`} className="block">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150">
              {title}
            </h4>
          </Link>
          
          <div className="mt-1 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {subject}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              {level}
            </span>
            {grade && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300">
                Class {grade}
              </span>
            )}
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 capitalize">
              {language}
            </span>
          </div>
          
          <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <span className="truncate">Added on {dateAdded}</span>
            <span className="mx-1">•</span>
            <span>{views} views</span>
            {downloads !== undefined && (
              <>
                <span className="mx-1">•</span>
                <span>{downloads} downloads</span>
              </>
            )}
          </div>
        </div>
        
        <div className="ml-4 flex-shrink-0 self-center">
          <Link 
            to={`/resource/${id}`}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
          >
            {type === 'quiz' ? 'Start Quiz' : 'View'}
          </Link>
        </div>
      </div>
    </div>
  );
}