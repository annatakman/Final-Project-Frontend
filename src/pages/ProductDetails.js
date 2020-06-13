import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { Button } from 'components/Button'
import { useDispatch } from 'react-redux'
import { cart } from '../reducers/cart'

const DetailPage = styled.section`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    padding: 0 20px 20px 20px;
  }
`

const Image = styled.img`
  width: 100%;
  @media (min-width: 1025px) {
    height: 90vh;
    width: auto;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* justify-content: space-between; */
  padding: 0 20px;
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-top: 30px;
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
  const [sold, setSold] = useState(false)
  const PRODUCT_URL = `http://localhost:8080/products/${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json)
        set_id(json._id)
        setImageURL(json.imageUrl)
        setName(json.name)
        setPrice(json.price)
        setSold(json.sold)
        console.log(json.sold)
      })
  }, [PRODUCT_URL])

  const handleAddToCart = () => {
    dispatch(
      cart.actions.addProduct({ _id, imageUrl, name, quantity: 1, price })
    )
  }

  const toAllProducts = () => {
    history.push('/products')
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
        <Wrapper>
          {!product.sold && (
            <Button
              onClick={handleAddToCart}
              title="Add to cart"
              background="#1a1a1a"
              color="#fff"
            />
          )}
          {product.sold && (
            <Button title="Sold" border="#d3d3d3" color="#d3d3d3" disabled />
          )}
          <Button onClick={toAllProducts} title="Back to all products" />
        </Wrapper>
      </Details>
    </DetailPage>
  )
}
