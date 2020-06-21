import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { ui } from '../reducers/ui'
import { profile } from '../reducers/user'
import { Button } from '../lib/Button'
import { ShowLoader } from '../components/ShowLoader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const MessageWrapper = styled.div`
  height: 20px;
  margin-bottom: 10px;
`
const Form = styled.form`
  display: grid;
  width: 100%;
  margin: 10px;

  @media (min-width: 1025px) {
    max-width: 40vw;
  }
`
const Label = styled.span`
  margin: 0;
  margin-top: 10px;
  font-size: 10px;
  text-transform: uppercase;
`
const Input = styled.input`
  width: 100%;
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  box-sizing: border-box;
  border: 1px solid #1a1a1a;
  outline: none;

  &:focus {
    border: 1px solid #d3d3d3;
  }

  ::-webkit-input-placeholder {
    color: #747474;
    font-size: 10px;
  }

  ::-moz-placeholder {
    color: #747474;
    font-size: 10px;
  }

  :-ms-input-placeholder {
    color: #747474;
    font-size: 10px;
  }

  :-moz-placeholder {
    color: #747474;
    font-size: 10px;
  }
`
const ImageSelect = styled.div`
  width: 100%;
  margin: 5px 0 5px 0;
  padding: 8px 15px;
  box-sizing: border-box;
  border: 1px solid #1a1a1a;
  outline: none;
`
const ImageInput = styled.input`
  width: 100%;
  color: #747474;
  font-size: 14px;
  outline: none;

  ::-webkit-file-upload-button {
    opacity: 0;
  }
  
  ::before {
    content: 'Select';
    display: inline-block;
    width: 38px;
    padding: 5px 6px;
    border: 1px solid #1a1a1a;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    color: #1a1a1a;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
  }

  :hover::before {
    border: 1px solid #fff;
    background: #1a1a1a;
    color: #fff;
  }
`
const Img = styled.img`
  justify-self: center;
  width: 30%;
  max-width: 200px;
  margin: 10px;
`
const Selections = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`
const Select = styled.div`
  position: relative;
  box-sizing: border-box;
`
const SelectButton = styled.button`
  position: relative;
  -webkit-appearance: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 100%;
  height: 37px;
  padding: 12px 18px;
  border: 1px solid #1a1a1a;
  border-radius: 0;
  background: #fff;
  text-align: left;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
const SelectArrow = styled.span`
  transform: ${props => props.open ? 'rotate(180deg) translateZ(0px)' : 'none'};
  transition: transform 0.2s linear;
`
const SelectText = styled.div`
  margin-right: 8px;
  color: #1a1a1a;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
`
const List = styled.ul`
  position: absolute;
  top: 37px;
  display: ${props => props.open ? 'block' : 'none'};
  width: 100%;
  height: 350px;
  margin: 0;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid #1a1a1a;
  border-top: none;
  background: #fff;
  font-size: 12px;
  text-align: justify;
  opacity: ${props => props.open ? 1 : 0};
  
  transform: none;
  list-style: none;
  overflow: auto; 
`
const SizeList = styled(List)`
`
const SubList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #fff;
  transform: none;
  list-style: none;
`
const ListItem = styled.li`
  margin: 5px 18px;
  padding: 3px;
  box-sizing: border-box;
  background: #fff;
  cursor: pointer;

  &:hover {
    color: #fb958b;
  }
`
const MainListItem = styled.li`
  margin: 5px 18px 5px 18px;
  padding: 3px;
  box-sizing: border-box;
`
const ButtonWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 40px;
`

export const UploadForm = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const isLoading = useSelector((store) => store.ui.isLoading)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Category')
  const [category, setCategory] = useState('')
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState('Size')
  const [size, setSize] = useState('')
  const [sizeOpen, setSizeOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()
  const [message, setMessage] = useState()
  const categories = [
    'Coats',
    'Dresses',
    'Jackets',
    'Jumpsuits',
    'Knitwear',
    'Pants',
    'Shorts',
    'Skirts',
    'Tops',
    'Jeans',
    'Shoes',
    'Accessories'
  ]
  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL']
  const jeansSizes = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]
  const shoeSizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]
  const LIST_URL = 'https://final-technigo-project.herokuapp.com/products'

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    const fileUrl = URL.createObjectURL(selectedFile)
    setPreview(fileUrl)

    return () => URL.revokeObjectURL(fileUrl)
  }, [selectedFile])

  const handleCategoryOpen = () => {
    setCategoryOpen(!categoryOpen)
  }

  const handleSizeOpen = () => {
    setSizeOpen(!sizeOpen)
  }

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
    dispatch(ui.actions.setLoading(true))
    const formData = new FormData()
    formData.append('image', selectedFile)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('price', price)
    formData.append('category', category)
    formData.append('size', size)
    formData.append('userId', userId)

    fetch(LIST_URL, {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(ui.actions.setLoading(false))
        setName('')
        setDescription('')
        setPrice('')
        setCategory('')
        setSelectedCategory('Category')
        setSize('')
        setSelectedSize('Size')
        setSelectedFile()
        setPreview()
        setMessage(json.message)
        dispatch(profile(accessToken, userId))
      })
      .catch(() => {
        dispatch(ui.actions.setLoading(false))
        setMessage('Could not create product.')
      })
  }

  return (
    <>
      <MessageWrapper>{message && message}</MessageWrapper>
      <Form onSubmit={handleListing}>
        <Selections>
          <Select>
            <SelectButton type="button" onClick={handleCategoryOpen}>
              <SelectText>{selectedCategory}</SelectText>
              <SelectArrow open={categoryOpen}>
                <FontAwesomeIcon icon={faCaretDown} />
              </SelectArrow>
            </SelectButton>
            <List open={categoryOpen}>
              {categories.map((category) => (
                <ListItem key={category} value={category} onClick={() => {
                  handleCategoryOpen()
                  setCategory(category)
                  setSelectedCategory(category)
                }}>
                  {category}
                </ListItem>
              ))}
            </List>
          </Select>

          <Select>
            <SelectButton type="button" onClick={handleSizeOpen}>
              <SelectText>{selectedSize}</SelectText>
              <SelectArrow open={sizeOpen}>
                <FontAwesomeIcon icon={faCaretDown} />
              </SelectArrow>
            </SelectButton>
            <SizeList open={sizeOpen}>
              <MainListItem>Clothing
                <SubList>
                  {clothingSizes.map((size) => (
                    <ListItem key={size} value={size} onClick={() => {
                      handleSizeOpen()
                      setSize(size)
                      setSelectedSize(size)
                    }}>
                      {size}
                    </ListItem>
                  ))}
                </SubList>
              </MainListItem>
              <MainListItem>Jeans
                <SubList>
                  {jeansSizes.map((size) => (
                    <ListItem key={size} value={size} onClick={() => {
                      handleSizeOpen()
                      setSize(size)
                      setSelectedSize(size)
                    }}>
                      {size}
                    </ListItem>
                  ))}
                </SubList>
              </MainListItem>
              <MainListItem>Shoes
                <SubList>
                  {shoeSizes.map((size) => (
                    <ListItem key={size} value={size} onClick={() => {
                      handleSizeOpen()
                      setSize(size)
                      setSelectedSize(size)
                    }}>
                      {size}
                    </ListItem>
                  ))}
                </SubList>
              </MainListItem>
              <MainListItem>Accessories
                <SubList>
                  <ListItem key="n/a" value="" onClick={() => {
                    handleSizeOpen()
                    setSize('N/A')
                    setSelectedSize('N/A')
                  }}>N/A</ListItem>
                </SubList>
              </MainListItem>
            </SizeList>
          </Select>

        </Selections>
        <Label htmlFor="name">
          Product name
          <Input
            placeholder="White dress"
            required
            value={name}
            id="name"
            onChange={(event) => setName(event.target.value)}
            minLength="3"
            maxLength="30" />
        </Label>
        <Label htmlFor="description">
          Description
          <Input
            placeholder="White cotton dress with puffy sleeves. Good condition."
            required
            value={description}
            id="description"
            onChange={(event) => setDescription(event.target.value)}
            minLength="3"
            maxLength="70" />
        </Label>
        <Label htmlFor="price">
          Price €
          <Input
            placeholder="35"
            required
            value={price}
            id="price"
            onChange={(event) => setPrice(event.target.value)}
            minLength="1"
            maxLength="6" />
        </Label>
        <Label htmlFor="image">
          Select image
          <ImageSelect>
            <ImageInput
              accept="image/png, image/jpeg, image/jpg"
              required
              type="file"
              id="image"
              onChange={onSelectFile}
              alt={name} />
          </ImageSelect>
        </Label>
        {preview && <Img src={preview} />}

        <ButtonWrapper>
          {!isLoading &&
            <Button
              type="submit"
              title="List product"
              background="#1a1a1a"
              color="#fff" />
          }
          {isLoading && <ShowLoader />}
        </ButtonWrapper>
      </Form>
    </>
  )
}
