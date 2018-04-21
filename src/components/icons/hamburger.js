// @flow
import React from 'react';
import styled from 'styled-components';

const HamburgerWrapper = styled.div`
  width: 30px;
  height: 22px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: ${({ fill }) => fill};
    border-radius: 4px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  span:nth-child(1) {
    top: ${({ open }) => (open ? '9px' : '0px')};
    width: ${({ open }) => (open ? '0%' : '100%')};
    left: ${({ open }) => (open ? '50%' : '0')};
  }

  span:nth-child(2),
  span:nth-child(3) {
    top: 9px;
  }

  span:nth-child(4) {
    top: ${({ open }) => (open ? '9px' : '18px')};
    width: ${({ open }) => (open ? '0%' : '100%')};
    left: ${({ open }) => (open ? '50%' : '0')};
  }

  span:nth-child(2) {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'none')};
  }

  span:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'none')};
  }
`;

type Props = {
  fill: string,
  open: boolean,
};

const Hamburger = ({ fill, open }: Props) => (
  <HamburgerWrapper fill={fill} open={open}>
    <span />
    <span />
    <span />
    <span />
  </HamburgerWrapper>
);

export default Hamburger;
