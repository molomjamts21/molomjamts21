import React from 'react';
import Header from '../components/header/desktop'
import Footer from '../components/footer/desktop/desktop'
import DesktopStyles from '../desktop/index.style'
import DynamicPage from '../pages'

const Index = ()=> {
    return (
        <DesktopStyles>
        <Header/>
        <DynamicPage/>
        <Footer/>
        </DesktopStyles>
    );
}

export default Index;