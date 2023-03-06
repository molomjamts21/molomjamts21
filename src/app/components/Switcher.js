import React from 'react';
import Desktop from '../desktop'
import Mobile from '../mobile'

const Switcher = () => {
    const isMobile = window.innerWidth < 992;

    return (
        <>
        {isMobile ? <Mobile/> : <Desktop/>}
        </>
    );
}

export default Switcher;