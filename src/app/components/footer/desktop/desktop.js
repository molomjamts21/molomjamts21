import React from 'react';
import styled from 'styled-components';
import {Container} from 'reactstrap';

const FooterWrapper = styled.div`
  padding: 32px 0;
.FooterWrapper{
  display: flex;
  justify-content: space-between;
  h5{
    color: #23479F;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 15px;
  }
  .footer-link {
    a {
      color: #23479F;
      font-weight: 400;
      font-size: 12px;
      text-decoration: unset;
      line-height: 30px;
    }
  }
}
`;

const footerLink = [{title:'Танилцуулга',child:[{title:'Бидний тухай', link:''},{title:'Түгээмэл асуулт, хариулт', link:''},{title:'Үйлчилгээний нөхцөл', link:''}]},
    {title:'Тусламж',child:[{title:'Санал хүсэлт', link:''}]},
    {title:'Хаяг',child:[{title:'Хаягийн дэлгэрэнгүй мэдээлэл', link:''}]}]

const  Desktop = () => {
    return (
        <FooterWrapper>
            <Container>
                <div className='FooterWrapper'>
                    {footerLink.map((d,i)=>(
                        <div key={i}>
                        <h5>{d.title}</h5>
                            <div>
                                {d.child?.map((c,idx)=>(
                                    <div key={idx} className='footer-link'>
                                    <a  href={c.link}>{c.title}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </FooterWrapper>
    );
}

export default Desktop;