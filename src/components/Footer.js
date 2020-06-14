import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  background: #d3d3d3;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
  }
`
const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    width: 20%;
  }
`
const FooterTitle = styled.h3`
  font-size: 15px;
`
const FooterP = styled.p`
  margin: 0;
  font-size: 14px;
`
const FooterAnchor = styled.a`
  cursor: pointer;
  font-size: 14px;
`
const Social = styled.div`
  a {
    font-size: 30px;
    margin: 6px;
  }
  
  @media (min-width: 768px) {
    a {
    margin-right: 15px;
    }
  }
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterTitle>About us</FooterTitle>
        <FooterP>
          This is a fictional webshop. The shop was created for the Technigo Bootcamp's final project.
        </FooterP>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Services</FooterTitle>
        <FooterAnchor>Shipping</FooterAnchor>
        <FooterAnchor>Exchanges & Returns</FooterAnchor>
        <FooterAnchor>FAQs</FooterAnchor>
        <FooterAnchor>Terms & Conditions</FooterAnchor>
        <FooterAnchor>Privacy Policy</FooterAnchor>
      </FooterSection>

      <FooterSection>
        <FooterTitle>Contact</FooterTitle>
        <FooterAnchor>Email</FooterAnchor>
        <Social>
          <FooterAnchor><FontAwesomeIcon icon={faFacebook} /></FooterAnchor>
          <FooterAnchor><FontAwesomeIcon icon={faInstagram} /></FooterAnchor>
          <FooterAnchor><FontAwesomeIcon icon={faPinterest} /></FooterAnchor>
        </Social>
      </FooterSection>
    </FooterWrapper>
  )
}