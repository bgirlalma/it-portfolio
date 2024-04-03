import { Route, Routes } from 'react-router-dom';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import HomePage from './pages/HomePage/homepage';
import Projects from './pages/Projects/projects';
import Layout from './SharedLayout/Layout';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/projects" element={<Projects/>}>
  
          </Route>
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
