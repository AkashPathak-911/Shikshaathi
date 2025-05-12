import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { SubjectProvider } from './context/SubjectContext';
import { Routes, Route } from './components/Router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SubjectsPage from './pages/admin/SubjectsPage';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <SubjectProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/course/:id" element={<CoursePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/subjects" element={<SubjectsPage />} />
              </Routes>
            </Layout>
          </SubjectProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;