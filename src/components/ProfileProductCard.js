import React from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../lib/Button'
import { editSold } from '../reducers/user'

const Product = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 280px;
  background: #fff;
`
const Img = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  object-position: 0 30%; 
`
const InfoWrapper = styled.div`
  display: grid;
  width: 100%;
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
  margin-top: 5px;
  font-size: 8px;
`
const CardOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 280px;
  border: 1px solid #1a1a1a;
  transform: translate(-50%, -50%);
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
      <Img src={product.imageUrl} alt={product.name} />
      <CardOverlay>
        <InfoWrapper>
          <Text>{product.name}</Text>
          <TextSmall>ID: {productId}</TextSmall>
          <Button
            onClick={toggleSold}
            title={product.sold ? 'Re-list' : 'Mark as sold'}
            background="#1a1a1a"
            color="#fff" />
        </InfoWrapper>
      </CardOverlay>
    </Product>
  )
}
