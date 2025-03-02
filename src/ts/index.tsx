import React from 'react';
import Layout from '@pages/layout';
const now = Date.now();
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app-root');
console.log('DATETIME:', now);
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<React.StrictMode>
	<Layout />
</React.StrictMode>);
