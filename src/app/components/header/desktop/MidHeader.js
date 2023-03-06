import React from 'react';
import styled from 'styled-components';
import {Container} from "reactstrap";
import MainLogo from '../../../images/MainLogo.svg'

const MidHeaderWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  .container{
    display: flex;
    justify-content: space-between;

    .left-section{
      display: flex;
      align-items: center;
      gap: 0 20px;
      h3{
        color: #23479F;
        font-weight: 500;
        font-size: 15px;  
        width: 230px;
        line-height: 24px;
      }
    }
    .right-section{
      display: flex;
      align-items: center;
      gap: 0 40px;
      .navigation-link{
        text-decoration: unset;
        color: #23479F;
        font-weight: 400;
        font-size: 16px;
        transition: all 200ms ease-in-out;
        :hover{
          opacity: 0.6;
        }
      }
    }
  }
`;

const Navigation = [{title:'Нүүр', link:''},{title:'Бидний тухай', link:''},{title:'Мэдээ мэдээлэл ', link:''},{title:'Булан', link:''},{title:'Холбоо барих', link:''}]

const MidHeader = () => {
    return (
        <MidHeaderWrapper>
            <Container>
                <div className='left-section'>
                    <img src={MainLogo} alt='logo'/>
                    <h3>Монголын Гаалийн Зуучлалын
                        Мэргэшсэн Холбоо</h3>
                </div>
                <div className='right-section'>
                    {Navigation.map((c,i)=>(
                        <a key={i} className='navigation-link' href={c.link}> <h5>{c.title}</h5></a>
                    ))}

                </div>
            </Container>
        </MidHeaderWrapper>
    );
}

export default MidHeader;