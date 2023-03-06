import styled from 'styled-components'

const DekstopStyle = styled.div`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 13px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    color: #2a2a2a;
    .swiper-button-next:after, .swiper-button-prev:after {
      display:none;
    }
  }
  .container, .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 8px;
    padding-right: 8px;
    .row:not(.no-gutters) {
      margin-left: -8px;
      margin-right: -8px;
      & > [class^="col-"],
      & > [class*=" col-"] {
        padding-left: 8px;
        padding-right: 8px;
      }
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1280px;
    }
    .col-lg-1-5 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-xl-1-7 {
      flex: 0 0 14.28%;
      max-width: 14.28%;
    }
  }
  @media (min-width: 1400px) {
    .col-lg-1-5 {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
  @media (min-width: 1600px) {
    .col-lg-1-5 {
      flex: 0 0 20%;
      max-width: 20%;
    }
    .col-xxl-1-6 {
      flex: 0 0 16.66%;
      max-width: 16.66%;
    }
  }
  @media (min-width: 1400px) {
    .container {
      max-width: 1360px;
    }
  }
  .fluid-product-col {
    width: 100%;
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
    padding-right: 8px;
    padding-left: 8px;
    @media (max-width: 1700px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
    @media (max-width: 1500px) {
      flex: 0 0 33%;
      max-width: 33%;
    }
    @media (max-width: 1260px) {
      flex: 0 0 50%;
      max-width: 50%;
    }
    @media (max-width: 1080px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  h5{
    margin: 0;
  }
body.fontLoaded {
  font-family: 'Roboto', sans-serif;
}
`;
export default DekstopStyle;