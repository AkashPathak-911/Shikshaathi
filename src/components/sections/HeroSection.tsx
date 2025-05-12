import React from 'react';
import { Link } from '../Router';
import { Search, BookOpen, Video, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute left-0 bottom-0 w-1/4 h-1/4 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block xl:inline">नेपाली विद्यार्थीहरूको लागि</span>{' '}
              <span className="block text-blue-600 dark:text-blue-400 xl:inline">एकीकृत शिक्षा मञ्च</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-lg">
              कक्षा १ देखि स्नातक तहसम्मका विद्यार्थीहरूको लागि सरकारी पाठ्यक्रममा आधारित संरचित शिक्षण सामग्रीहरू।
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <form className="sm:flex">
                <label htmlFor="search" className="sr-only">
                  Search courses, resources or topics
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full sm:text-lg py-3 pl-10 pr-4 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="पाठ्यक्रम, स्रोतहरू वा विषयहरू खोज्नुहोस्"
                    type="search"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full py-3 px-4 rounded-md shadow bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-lg"
                  >
                    खोज्नुहोस्
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                लोकप्रिय: {' '}
                <Link to="/explore?q=Science" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  विज्ञान
                </Link>
                {', '}
                <Link to="/explore?q=Math" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  गणित
                </Link>
                {', '}
                <Link to="/explore?q=Engineering" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  इन्जिनियरिङ
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full"
                src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Nepali students studying"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">कक्षा-अनुसार संगठित</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  कक्षा १ देखि स्नातकसम्मका विद्यार्थीहरूको लागि उनीहरूको स्तर अनुसार अनुकूलित सामग्री।
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Video className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">बहु-प्रारूप शिक्षा</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  भिडियो व्याख्यान, PDF नोटहरू, प्रश्नोत्तरी, र अभ्यास परीक्षाहरू अनलाइन र अफलाइन पहुँचका लागि।
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <Award className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">प्रमाणित शिक्षकहरू</h3>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  शिक्षकहरू र विषय विशेषज्ञहरूद्वारा निर्मित उच्च गुणस्तरीय सिकाई सामग्री।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}