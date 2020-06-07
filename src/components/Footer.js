import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 20px;
  margin-top: 10px;
  padding: 20px;
  background: #d8dadc;

  @media (min-width: 768px) {
    grid-template-columns: 32% 32% 32%;
    grid-column-gap: 2%;
  }
`
const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
`
const FooterTitle = styled.h3``
const FooterP = styled.p`
  margin: 0;
`
const FooterAnchor = styled.a`
  margin-right: 15px;
  cursor: pointer;
`
const Social = styled.div`
  font-size: 30px;
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <FooterTitle>About us</FooterTitle>
        <FooterP>This is a fictional webshop. The shop was created for the Technigo Bootcamp's final project.</FooterP>
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