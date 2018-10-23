import React from 'react';

import TopMenu from './TopMenu';
import Footer from './Footer';

const Error = () => {
    return(
        <div style={{background:'linear-gradient(to right, pink, orange)'}}>
        <TopMenu />
            <p>Error: Path does not exist!!!</p>
        <Footer />
        </div>
    );
};

export default Error;