import React from 'react';
import Layout from '@pages/layout';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app-root');
console.log('빌드 시간:', BUILD_DATE);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>
);
