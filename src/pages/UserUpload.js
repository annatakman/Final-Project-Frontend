import React from 'react'
import styled from 'styled-components/macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { UploadForm } from '../components/UploadForm'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  margin-bottom: 20px;
  padding: 20px;
`
const SubTitle = styled.p`
  text-align: center;
`

export const UserUpload = () => {

  return (
    <Section>
      <h2>List a product <FontAwesomeIcon icon={faTag} /></h2>
      <SubTitle>
        Give your wardrobe a second life. Sell what you don't
        wear to someone in our community.
      </SubTitle>
      <UploadForm />
    </Section>
  )
}
