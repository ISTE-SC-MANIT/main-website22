import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/main-website22/',
		element: <HomePage />,
	},
	{
		path: '/main-website22/team',
		element: <TeamPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
