
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'components/Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

const DetailPage = styled.section``

const Article = styled.article`
  position: relative;
  width: 70vh;
  background: #d8dadc;
`
const Image = styled.img`
  width: 100%;
`

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  ${Article}:hover & {
    opacity: 1;
  }
`

export const ProductDetails = (/* { _id, imageUrl, name, price } */) => {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const PRODUCT_URL = `http://localhost:8080/products/${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
      })
  }, [PRODUCT_URL])

  const handleAddToCart = () => {
    dispatch(cart.actions.addProduct({ product }))
  }

  return (
    <DetailPage>
      <Article>
        <Image src={product.imageUrl} alt={product.name} />
        <Details>
          <h4>{product.description}</h4>
          <p>Size: {product.size}</p>
          <p>Price: {product.price} EUR</p>
        </Details>
        <ButtonWrapper>
          <Button onClick={handleAddToCart} title="Add To Cart"></Button>
        </ButtonWrapper>
      </Article>
      <Link to="/products">
        <Button title="Back to all products" />
      </Link>
    </DetailPage>
  )
}