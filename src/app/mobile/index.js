import React from 'react';
import DynamicPage from "../pages";
import styled from 'styled-components';
import Header from '../components/header/mobile';
import Footer from '../components/footer/mobile';

const MobileStyles = styled.div``;

const Index = () => {
    return (
        <MobileStyles>
            <Header/>
            <DynamicPage/>
            <Footer/>
        </MobileStyles>
    );
}

export default Index;