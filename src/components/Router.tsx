import React, { createContext, useContext, ReactNode } from 'react';

interface Route {
  path: string;
  element: React.ReactNode;
}

interface RoutesProps {
  children: ReactNode;
}

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

// Create a context to store current route
const RouteContext = createContext<string>("/");

// Simple client-side router implementation
export function Routes({ children }: RoutesProps) {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  return (
    <RouteContext.Provider value={currentPath}>
      {children}
    </RouteContext.Provider>
  );
}

export function Route({ path, element }: RouteProps) {
  const currentPath = useContext(RouteContext);
  
  // Simple path matching
  if (path.includes(':')) {
    const pathSegments = path.split('/');
    const currentSegments = currentPath.split('/');
    
    if (pathSegments.length !== currentSegments.length) return null;
    
    const allSegmentsMatch = pathSegments.every((segment, i) => {
      if (segment.startsWith(':')) return true;
      return segment === currentSegments[i];
    });
    
    return allSegmentsMatch ? <>{element}</> : null;
  }
  
  return currentPath === path ? <>{element}</> : null;
}

// Navigation helper function
export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

// Link component for navigation
export function Link({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}