import React, {Suspense} from 'react';
import Background from '@components/background'
import '@styles/layout.css';
import Loading from '@utils/Loading';
import Cursor from '@utils/Cursor';
const cursor = new Cursor(0, 0, 5);

const Layout = (props) => {
    return <>
        <h1>popsapples page</h1>
        <main>
            <Suspense fallback={<Loading />}>
                <Background />
            </Suspense>
        </main>
    </>
}

export default Layout