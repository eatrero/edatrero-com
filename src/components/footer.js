// @flow
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
const Footer = () => (
  <FooterWrapper>
    <p>
      This site is created using{''}
      <a href="https://github.com/eatrero/edatrero-com"> react-static.</a>
    </p>
  </FooterWrapper>
);

export default Footer;
