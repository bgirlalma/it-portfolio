import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./SharedLayout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/homepage'));
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'));
const ContactsPage = lazy(() => import('./pages//ContactsPage/contacts'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/projects'));

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
export default App;
