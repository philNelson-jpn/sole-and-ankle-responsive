import React from "react";
import styled from "styled-components";

import { WEIGHTS } from "../../constants";

const NavLink = ({children, ...delegated}) => {
    return <Wrapper {...delegated}>
        <MainText>{children} </MainText>   
        <HoverText>{children} </HoverText>   
    </Wrapper>;
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  
  /* text sliding up effect */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
    display: block;

    transform: translateY(var(--translate-from)) rotate(0deg) scale(0.9);
    transition: transform 700ms;

  @media (hover:hover) and (prefers-reduced-motion: no-preference){
    ${Wrapper}:hover & {
        transform: translateY(var(--translate-to)) rotate(2.4deg) scale(1);
        transition: transform 300ms;
    }
}
`;

const MainText = styled(Text)`
    --translate-from: 0%;
    --translate-to: -120%;
`;

const HoverText = styled(Text)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-weight: ${ WEIGHTS.bold };

    --translate-from: 120%;
    --translate-to: 0%;
`;

export default NavLink;