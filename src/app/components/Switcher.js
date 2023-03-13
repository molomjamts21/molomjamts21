import React from 'react';
import SwapContainer from "../../SwapContainer";
import ILoader from '../components/Loader';
import {loadable} from './Loadable';


const Switcher = () => {
    const options = { fallback: <ILoader /> };
    const Desktop = loadable(() => import('../desktop'), options);
    const Mobile = loadable(() => import('../mobile'), options);

    return (
        <SwapContainer desktop={Desktop} mobile={Mobile} />
    );
}

export default Switcher;