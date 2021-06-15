import React, { useState } from "react";
// import DropNav from "./DropNav";
import styled from 'styled-components';
import { Link, animateScroll as scroll} from 'react-scroll';

export const StyledBurger = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? "#000000" : "#000000"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Ul = styled.ul`
  margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  box-shadow: 0 4px 6px -2px rgba(0,0,0,.2);
  z-index: 22;
  li {
    padding: 15px 25px;
  }
  li a {
    font-size: 18px;
    color: #37392E;
    text-decoration: none;
  }
  li a:hover {
    color: 37392E;
    text-decoration: underline;
    text-decoration-color: #37392E;
  }
  @media (max-width: 1024px) {
    margin-top: 50px;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    top: 0;
    right: 0;
    height: 20vh;
    width: 100vw;
    padding-top: 2rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
    }
    @media (max-width: 414px) and (max-height: 736px) {
      height: 25vh;
      padding-top: 1rem;
    }
    @media (max-width: 375px) {
      height: 22vh;
      padding-top: 1rem;
    }
    @media (max-width: 375px) and (max-height: 667px) {
      height: 25vh;
      padding-top: 1rem;
    }
  }
`;

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  function handleClick(px) { // figure out bug where page goes to top when click on current navbar 
    scroll.scrollTo(px);
    setOpen(false);
  }
  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div/>
        <div/>
        <div/>
      </StyledBurger>
      <Ul open={open}>
        <li><Link activeClass="active" onClick={() => handleClick(0)}>Home</Link></li>
        <li><Link activeClass="active" onClick={() => handleClick(window.innerHeight*1)}>Projects</Link></li>
        <li><Link activeClass="active" onClick={() => handleClick(window.innerHeight*2)}>About</Link></li>
      </Ul>
    </div>
  );
}