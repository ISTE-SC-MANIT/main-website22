import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/UI/NotFound';
const router = createBrowserRouter([
	{
		path: '/main-website22/',
		element: <HomePage />,
	},
	{
		path: '/main-website22/team',
		element: <TeamPage />,
	},
	{
		path: '*',
		element: <NotFound></NotFound>,
	},
]);

function App() {
	const [ld, sld] = useState(true);
	const spinner = document.getElementById('ctn-preloader');
	if (spinner) {
		setTimeout(() => {
			spinner.style.display = 'none';
			sld(false);
		}, [1000]);
	}
	return !ld && <RouterProvider router={router} />;
}

export default App;
