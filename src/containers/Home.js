// @flow
import React from 'react';
import { withSiteData } from 'react-static';
import styled from 'styled-components';
import LinkedIn from '../components/icons/linkedin';
import Github from '../components/icons/github';

const Heading = styled.h1`
  text-align: center;
  color: #444;
  font-size: 24px;
`;

const Subheading = styled.h2`
  text-align: center;
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
  title: string,
  link: string,
  icon: any,
};

const socialLinks = [
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/edatrero/',
    icon: LinkedIn,
  },
  {
    title: 'Github',
    link: 'https://github.com/eatrero',
    icon: Github,
  },
];

export const Home = () => (
  <div>
    <Heading>Ed Atrero</Heading>
    <Subheading>Software Developer</Subheading>
    <LinksWrapper>
      {socialLinks.map(({ icon: Icon, link, title }: SocialLink) => (
        <LinkWrapper key={title}>
          <a href={link} target="_blank" title={title}>
            <Icon className="social-icon" fill="#a0a0a0" />
          </a>
        </LinkWrapper>
      ))}
    </LinksWrapper>
  </div>
);

export default withSiteData(Home);
