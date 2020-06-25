import React from 'react'
import styled from 'styled-components/macro'

const AboutSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 10%;
color: #1a1a1a;

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 26px;
  }

  a {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    padding: 10% 20%;
  }
`

export const About = () => {

  return (
    <AboutSection>
      <h1>About the project</h1>
      <p>
        This website was built in spring 2020 as our final project at the Technigo coding bootcamp.
        We worked in a team of three and together we built a mock web shop where we combine our love
        for coding, fashion and sustainability. Please have a look around and browse our "shop" for used
        clothing and accessories. If you like to take it a step further we invite you to create an account
        and list your own used clothing and accessories on the site, thus giving your used stuff a
        new life and contributing to a more sustainable way of shopping!</p>
      <h2>Who are we?</h2>
      <p>
        The programmers behind this project are
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/kajsa-bootin-5a777a157/"> Kajsa Bootin</a>,
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/frida-eriksson-97570943/"> Frida Eriksson </a>
         and<a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/anna-takman-734117197/"> Anna Takman</a>.
        We hope you have fun checking out our website. If you have any questions make sure
        to reach out to us on LinkedIn.
      </p>
    </AboutSection>
  )
}