import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Error = lazy(() => import('./pages/Error/Error'));

const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/registration',
        element: <Element component={<Registration />} />,
      },
      {
        path: '/*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default router;
