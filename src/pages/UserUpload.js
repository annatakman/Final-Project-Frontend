import React from 'react'
import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
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

export const UserUpload = () => {
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)

  return (
    <Section>
      {accessToken && (
        <>
          <h2>
            List a product <FontAwesomeIcon icon={faTag} />
          </h2>
          <p>
            Give your wardrobe a second life. Sell what you don't wear to
            someone in our community.
          </p>
          <UploadForm />
        </>
      )}
      {!accessToken && history.push('/')}
    </Section>
  )
}
