// @flow
import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
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

type SocialLink = {
  altText: string,
  link: string,
  icon: any,
};

const socialLinks = [
  {
    altText: 'LinkedIn',
    link: 'https://www.linkedin.com/in/edatrero/',
    icon: LinkedIn,
  },
  {
    altText: 'Github',
    link: 'https://github.com/eatrero',
    icon: Github,
  },
];

export default withSiteData(() => (
  <div>
    <Heading style={{ textAlign: 'center' }}>Ed Atrero</Heading>
    <Subheading style={{ textAlign: 'center' }}>Software Developer</Subheading>
    <LinksWrapper>
      {socialLinks.map((socialLink: SocialLink) => {
        const Icon = socialLink.icon;
        return (
          <LinkWrapper>
            <a href={socialLink.link} target="_blank">
              <Icon fill="#a0a0a0" />
            </a>
          </LinkWrapper>
        );
      })}
    </LinksWrapper>
  </div>
));
