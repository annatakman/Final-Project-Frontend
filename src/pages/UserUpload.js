import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { Button } from '../components/Button'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  padding: 20px;
  min-height: 80vh;
`
const Form = styled.form`
  display: grid;
  margin: 10px;
  width: 100%;

  @media (min-width: 1025px) {
    max-width: 40vw;
  }
`
const Label = styled.span`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
`
const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
  outline: none;

  &:focus {
    border: 1px solid #1a1a1a;
  }

  ::-webkit-input-placeholder { 
    color: #747474;
    font-size: 8px;
  }
  ::-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-ms-input-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
`
const Text = styled.p`
  margin-top: 40px;
  font-size: 10px;
  text-transform: uppercase;
`
const ImageInput = styled.input`
`
const Img = styled.img`
  margin: 10px;
  width: 30%;
  max-width: 200px;
  justify-self: center;
`


export const UserUpload = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const categories = ['Category', 'Coats', 'Dresses', 'Jackets', 'Jumpsuits', 'Knitwear', 'Pants', 'Shorts', 'Skirts', 'Tops', 'Jeans', 'Accessories', 'Shoes']
  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL']
  const jeansSizes = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
  const shoeSizes = [36, 37, 38, 39, 40, 41, 42]
  const LIST_URL = 'http://localhost:8080/products'

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const fileUrl = URL.createObjectURL(selectedFile)
    setPreview(fileUrl)

    return () => URL.revokeObjectURL(fileUrl)
  }, [selectedFile])

  const onSelectFile = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }

    setSelectedFile(event.target.files[0])
  }

  // To list product for sale, can be moved to thunk if we want to
  const handleListing = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('image', selectedFile)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('size', size)
    formData.append('seller', userId)

    fetch(LIST_URL, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: accessToken
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setSize('')
      })
  }

  return (
    <Section>
      <h2>Sell an item</h2>
      <p>Give your wardrobe a second life. Sell what you don't wear to someone in our community by listing it below.</p>
      <Form onSubmit={handleListing}>

        <Label htmlFor="name">
          Product name
          <Input
            placeholder="PRODUCT NAME"
            required
            value={name}
            id="name"
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Label htmlFor="description">
          Description
          <Input
            placeholder="DESCRIPTION"
            required
            value={description}
            id="description"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Label>
        <Label htmlFor="password">
          Price
          <Input
            placeholder="PRICE"
            required
            value={price}
            id="price"
            onChange={(event) => setPrice(event.target.value)}
          />
        </Label>
        <Label htmlFor="category">
          Category
          <select id="category" required onChange={(event) => setCategory(event.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </Label>
        <Label htmlFor="size">
          Size
          <select id="size" required onChange={(event) => setSize(event.target.value)}>
            <optgroup label="Clothing">
              {clothingSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </optgroup>
            <optgroup label="Jeans">
              {jeansSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </optgroup>
            <optgroup label="Shoes">
              {shoeSizes.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </optgroup>
            <optgroup label="Accessories">
              <option key='n/a' value=''>N/A</option>
            </optgroup>
          </select>
        </Label>
        <Label htmlFor="image">
          Select image
          <ImageInput
            accept="image/png, image/jpeg, image/jpg"
            required
            type="file"
            id="image"
            onChange={onSelectFile}
          />
        </Label>
        {preview && <Img src={preview} />}

        <Button type="submit" title="List product" background="#1a1a1a" color="#fff" />
      </Form>
    </Section>
  )
}
