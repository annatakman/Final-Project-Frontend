import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

const DetailPage = styled.section`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-column-gap: 20px;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    max-width: 1300px;
    margin: auto;
  }
`
const Image = styled.img`
  width: 100%;

  @media (min-width: 1025px) {
    height: 85vh;
    width: 50vw;
    max-width: 650px;
    object-fit: cover;
    object-position: 50% 20%;
  }
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 0 20px;
  width: 100%;
`
const Title = styled.h3`
  margin: 5px 0 2px 0;
`
const SubTitle = styled.h4`
  margin: 5px 0 2px 0;

  @media (min-width: 1025px) {
    margin-top: 20px;
  }
`
const Specification = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (min-width: 1025px) {
    margin-top: 10px;
  }
`
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin: 30px 20px 0 0;
  }
`

export const ProductDetails = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const [_id, set_id] = useState('')
  const [imageUrl, setImageURL] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [sellerName, setSellerName] = useState('')
  const PRODUCT_URL = `https://final-technigo-project.herokuapp.com/products/${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
        set_id(json._id)
        setImageURL(json.imageUrl)
        setName(json.name)
        setPrice(json.price)
        if (!json.createdByAdmin) {
          setSellerName(json.seller.name)
        }
      })
  }, [PRODUCT_URL])

  const handleAddToCart = () => {
    dispatch(
      cart.actions.addProduct({ _id, imageUrl, name, quantity: 1, price })
    )
  }

  const handleMailTo = () => {
    window.location.assign(`mailto:${product.seller.email}?subject=Product: ${product.name} ${product._id}`)
  }

  const toAllProducts = () => {
    history.push('/products')
  }

  const toMarket = () => {
    history.push('/market')
  }

  return (
    <DetailPage>
      <Image src={product.imageUrl} alt={product.name} />
      <Details>
        <Title>{product.name}</Title>
        <SubTitle>{product.description}</SubTitle>
        <Specification>
          <p>Size: {product.size}</p>
          <p>{product.price} €</p>
        </Specification>
        {sellerName && <p>Listed by: {product.seller.name}</p>}
        <ButtonWrapper>
          {!product.sold &&
            <>
              {product.createdByAdmin &&
                <Button
                  onClick={handleAddToCart}
                  title="Add to cart"
                  background="#1a1a1a"
                  color="#fff" />
              }
              {!product.createdByAdmin &&
                <Button
                  onClick={handleMailTo}
                  title="Contact seller"
                  background="#1a1a1a"
                  color="#fff" />
              }
            </>
          }
          {product.sold &&
            <Button title="Sold" border="#d3d3d3" color="#d3d3d3" disabled />
          }
          {product.createdByAdmin && <Button onClick={toAllProducts} title="Back to all products" />}
          {!product.createdByAdmin && <Button onClick={toMarket} title="Back to market" />}
        </ButtonWrapper>
      </Details>
    </DetailPage >
  )
}
