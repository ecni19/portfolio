import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  margin-top: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
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
  @media (max-width: 768px) {
    margin-top: 50px;
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-150%)'};
    top: 0;
    right: 0;
    height: 30vh;
    width: 100vw; 
    padding-top: 2rem;
    transition: transform 0.5s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

export default function DropNav({open}) {
  return(
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="/team">Our Team</a></li>
      <li><a href="/currentProjects">Current Projects</a></li>
      <li><a href="/contactUs">Contact Us</a></li>
    </Ul>
  )
}