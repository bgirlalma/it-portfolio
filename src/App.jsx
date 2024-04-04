import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/homepage';
import Projects from './pages/Projects/projects';
import Layout from './SharedLayout/Layout';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/projects" element={<Projects/>}>
  
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
  );
}
export default App;
