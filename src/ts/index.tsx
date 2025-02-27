import React from 'react';
import Layout from '@pages/layout';
// import ReactDOM from 'react-dom';
// ReactDOM.render(
// 	<React.StrictMode>
//   		<div>Hello</div>
//   	</React.StrictMode>,
//   	document.getElementById('app-root')
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app-root');
console.log(container);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
	<Layout />
</React.StrictMode>);
