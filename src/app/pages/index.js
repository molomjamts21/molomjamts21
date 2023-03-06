import React from 'react';
import Wallpaper from '../images/DynamicImage.png';
import styled from 'styled-components';

const DynmicPageWrapper = styled.div`
img{
  width: 100%;
}
`;

const DynamicPage =() => {
    return (
        <DynmicPageWrapper>
                <img src={Wallpaper} alt=''/>
        </DynmicPageWrapper>
    );
}

export default DynamicPage;