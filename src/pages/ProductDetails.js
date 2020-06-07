import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'components/Button'

const DetailPage = styled.section``

const Image = styled.img`
height: 70vh;
`

export const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const PRODUCT_URL = `http://localhost:8080/products/${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(res => res.json())
      .then((data) => {
        setProduct(data)
      })
  }, [productId])

  return (
    <DetailPage>
      <Image src={product.imageUrl} alt={product.name}></Image>
      <h4>{product.description}</h4>
      <p>Size: {product.size}</p>
      <p>Price: {product.price} EUR</p>
      <Link to='/products'>
        <Button title='Back to all products' />
      </Link>
    </DetailPage>
  )
}

