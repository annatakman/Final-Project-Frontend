import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState({})
  const PRODUCT_URL = `http://localhost:8080/products${productId}`

  useEffect(() => {
    fetch(PRODUCT_URL)
      .then(res => res.json())
      .then(json => {
        setProduct(json)
      })
  }, [productId])

  return (
    <div>produkt</div>
  )
}

