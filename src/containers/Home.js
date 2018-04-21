import React from 'react';
import { withSiteData } from 'react-static';
import styled, { extend } from 'styled-components';
import LinkedIn from '../components/icons/linkedin';
import Github from '../components/icons/github';

const Heading = styled.h1`
  color: #444;
  font-size: 24px;
`;

const Subheading = styled.h2`
  color: #444;
  font-size: 18px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.div`
  padding: 20px;
`;

export default withSiteData(() => (
  <div>
    <Heading style={{ textAlign: 'center' }}>Ed Atrero</Heading>
    <Subheading style={{ textAlign: 'center' }}>Software Developer</Subheading>
    <LinksWrapper>
      <LinkWrapper>
        <LinkedIn fill="#a0a0a0" />
      </LinkWrapper>
      <LinkWrapper>
        <Github fill="#a0a0a0" />
      </LinkWrapper>
    </LinksWrapper>
  </div>
));
