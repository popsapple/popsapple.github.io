import React, { Suspense } from 'react';
import Background from '@components/background';
import '@styles/layout.css';
import Loading from '@utils/Loading';
const Layout = (props) => {
	return (
		<>
			<h1>popsapples page</h1>
			<main>
				<Suspense fallback={<Loading />}>
					<Background />
				</Suspense>
			</main>
		</>
	);
};

export default Layout;
