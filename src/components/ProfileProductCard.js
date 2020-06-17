import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../components/Button'
import { editSold } from '../reducers/user'

const Product = styled.div`
  display: grid;
  width: 100%;
  height: 280px;
  /* padding: 10px; */
  background: #fff;
  position: relative;
`
const Img = styled.img`
  height: 170px;
  width: 100%;
  object-fit: cover;
  object-position: 0 30%; 
`
const InfoWrapper = styled.div`
  display: grid;
  padding: 10px;
`
const Text = styled.p`
  margin-top: 15px;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`
const TextSmall = styled(Text)`
  font-size: 8px;
  margin-top: 5px;
`
const CardOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transform: translate(-50%, -50%);
  width: 100%;
  border: 1px solid #1a1a1a;
  height: 280px;
`

export const ProfileProductCard = ({ productId, product }) => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const sold = !product.sold

  const toggleSold = () => {
    dispatch(editSold(accessToken, productId, userId, sold))
  }

  return (
    <Product>

      <Img src={product.imageUrl} />
      <CardOverlay>
        <InfoWrapper>
          <Text>{product.name}</Text>
          <TextSmall>ID: {productId}</TextSmall>
          <Button
            onClick={toggleSold}
            title={product.sold ? 'Re-list' : 'Mark as sold'}
            background="#1a1a1a"
            color="#fff"
          />
        </InfoWrapper>
      </CardOverlay>
    </Product>
  )
}
