import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import ResultsList from './components/ResultsList';
import VideoContainer from './components/VideoContainer';

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <MainContainer />,
      children: [
        {
          path: '/results',
          element: <ResultsList />
        },
        {
          path: '/',
          element: <VideoContainer />
        }
      ]
    },
    {
      path: '/watch',
      element: <WatchPage />
    },
  ]
}])

function App() {



  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
