/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
      <InnerWrapper>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden></CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SlideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--color-backdrop);
  animation: ${FadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  --overfill: 28px;
  position: relative;
  background: white;
  height: 100%;
  width: calc(400px + var(--overfill));
  margin-inline-end: calc(var(--overfill) * -1);
  padding: 32px var(--overfill);

  @media (prefers-reduced-motion: no-preference){
    animation: ${SlideIn} 500ms both cubic-bezier(0,.91,.27,1.22);
    animation-delay: 300ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  text-transform: uppercase;
  font-size: 1.325rem;

  &:first-of-type{
    color: var(--color-secondary);
  }

  --nav-fade: ${FadeIn} 600ms both, ${SlideIn} 300ms both;

  @media (prefers-reduced-motion: no-preference){
  &:nth-of-type(1){
  animation: var(--nav-fade);
  animation-delay: 200ms;
}

  &:nth-of-type(2){
  animation: var(--nav-fade);
  animation-delay: 400ms;
}

  &:nth-of-type(3){
  animation: var(--nav-fade);
  animation-delay: 600ms;
}

  &:nth-of-type(4){
    animation: var(--nav-fade);
    animation-delay: 800ms;
  }

  &:nth-of-type(5){
    animation: var(--nav-fade);
    animation-delay: 1000ms;
  }

  &:nth-of-type(6){
    animation: var(--nav-fade);
    animation-delay: 1200ms;
  }
}
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--weight-normal);
`;

const Filler = styled.div`
  flex: 1;
`;



export default MobileMenu;
