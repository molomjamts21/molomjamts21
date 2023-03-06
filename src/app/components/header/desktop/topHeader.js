import React from 'react';
import styled from 'styled-components';
import call from '../../../images/Call.svg';
import facebook from '../../../images/Facebook.svg';
import instagram from '../../../images/Insta.svg';
import youtube from '../../../images/youtube.svg';
import engLogo from '../../../images/engLogo.svg';
import mnLogo from '../../../images/mnLogo.svg';
import {Container} from 'reactstrap';
const TopHeaderWrapper = styled.div`
  position: relative;
  background-color: #ECECEC;
  padding:12px 6px;
  .container{
    .topbar-wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-section{
        display: flex;
        gap: 0 35px;
        color: #BFC1C7;
        padding-left: 20px;
        position: relative;
        .phone{
          position: absolute;
          top: 2px;
          left: 0;
        }
        a{
          font-weight: 400;
          font-size: 12px;
          color: #BFC1C7;
          text-decoration: unset;
          transition: all 200ms ease-in-out;
          :hover{
            color: rgb(35, 71, 159);
          }
        }
        .socials{
          display: flex;
          align-items: center;
          gap: 0 10px;
          img{
            width: 16px;
          }
        }
      }
      .right-section{
        display: flex;
        gap: 0 15px;
      }
    }


  }

`;

const TopHeader = () => {
    return (
        <TopHeaderWrapper>
            <Container>
                <div className='topbar-wrapper'>            <div className='left-section'>
                    <div><img className='phone' src={call} alt='phone'/>
                        <a href='tel:7700-8686'>7700-8686</a></div> |
                    <div className='socials'><img src={facebook} alt=''/> <img src={instagram} alt=''/> <img src={youtube} alt=''/> </div>
                </div>
                    <div className='right-section'><img src={engLogo} alt=''/><img src={mnLogo} alt=''/> </div>
                </div>
            </Container>
        </TopHeaderWrapper>
    );
}

export default TopHeader;