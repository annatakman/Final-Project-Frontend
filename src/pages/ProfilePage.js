import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { edit } from '../reducers/user'
import { Button } from '../components/Button'
import { user } from '../reducers/user'
import { Checkout } from './Checkout'
import { UserProfileProducts } from '../components/UserProfileProducts'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8)), url('https://res.cloudinary.com/dciqrlzem/image/upload/v1591728323/products/karina-tess-H14pfhlfr24-unsplash_rn9vow.jpg');
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  min-height: 80vh;
`

const Title = styled.h1`
text-transform: uppercase;
`

const Form = styled.form`
  display: grid;
  margin: 10px;
  width: 100%;
  max-width: 400px;
`
const Label = styled.label`
  color: transparent;
  font-size: 0;
`
const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #fff;
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

const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Text = styled.h3`
  margin-top: 40px;
  text-transform: uppercase;
`

const Details = styled.p`
font-size: 14px;
`

export const ProfilePage = () => {
  const dispatch = useDispatch()
  const [orders, setOrders] = useState([])
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userId = useSelector((store) => store.user.login.userId)
  const [name, setName] = useState(useSelector((store) => store.user.login.name))
  const [email, setEmail] = useState(useSelector((store) => store.user.login.email))
  //const [password, setPassword] = useState(useSelector((store) => store.user.login.password))
  const [street, setStreet] = useState(useSelector((store) => store.user.login.street))
  const [postcode, setPostcode] = useState(useSelector((store) => store.user.login.postcode))
  const [city, setCity] = useState(useSelector((store) => store.user.login.city))
  const [telephone, setTelephone] = useState(useSelector((store) => store.user.login.telephone))

  // To edit user profile.
  const handleEdit = (event) => {
    event.preventDefault()
    dispatch(edit(accessToken, userId, name, email, street, postcode, city, telephone))
  }

  // To get users order history
  const USERS_URL = `http://localhost:8080/users/${userId}`
  useEffect(() => {
    fetch(USERS_URL, {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setOrders(json.orderHistory)
      })
  }, [accessToken, USERS_URL])

  return (
    <Section>
      <Title>Edit your profile here</Title>
      <Form onSubmit={handleEdit}>
        <Label htmlFor="name">Name
          <Input
            id="name"
            placeholder="NAME"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Label>
        <Label htmlFor="email">Email
          <Input
            id="email"
            placeholder="EMAIL"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Label>
        {/* <Label htmlFor="password">Password
          <Input
            id="password"
            placeholder="PASSWORD"
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label> */}
        <Label htmlFor="street">Street
          <Input
            id="street"
            placeholder="STREET"
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </Label>
        <Label htmlFor="postcode">Postal code
          <Input
            id="postcode"
            placeholder="POSTAL CODE"
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
          />
        </Label>
        <Label htmlFor="city">City
          <Input
            id="city"
            placeholder="CITY"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </Label>
        <Label htmlFor="telephone">Telephone
          <Input
            id="telephone"
            placeholder="TELEPHONE"
            required
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </Label>

        <Button type="submit" title="Save changes" background="#1a1a1a" color="#fff" />
      </Form>

      <Orders>
        {orders && (
          <div>
            <Text>Your order history: </Text>
            {orders.map((order) => (
              < div key={order._id} >
                <Details>Order number: {order._id}</Details>
                <Details> Status: {order.status}</Details>
              </div>
            ))}
          </div>
        )
        }
      </Orders>
      <UserProfileProducts />
    </Section >
  )
}











// import React, { useState, useEffect } from 'react'
// import { useHistory, useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import styled from 'styled-components'
// import { Button } from '../components/Button'
// import { user } from '../reducers/user'
// import { Checkout } from './Checkout'

// const ProfileDetails = styled.section`
//   padding: 20px;
// `

// const Profile = styled.section``

// const Div = styled.div`
//   display: grid;
//   grid-template-columns: 5fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr;
//   grid-gap: 6px;
//   margin-top: -23px;

//   @media (min-width: 768px) {
//     grid-template-columns: 2fr 2fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr;
//     font-size: 18px;
//   }
// `

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: 100%;
//   width: 100%;

//   @media (min-width: 768px) {
//     //justify-items: center;
//     grid-template-columns: 25%;
//     justify-content: center;
//   }
// `

// const Titel = styled.h1``

// const Text = styled.h4`
//   font-weight: bold;
//   margin-top: 16px;
// `

// const Content = styled.p``

// export const ProfilePage = () => {
//   const [orders, setOrders] = useState([])
//   const history = useHistory()
//   const dispatch = useDispatch()

//   const handleSignOut = () => {
//     dispatch(user.actions.logout())
//   }

//   const accessToken = useSelector((store) => store.user.login.accessToken)
//   const userName = useSelector((store) => store.user.login.name)
//   const userEmail = useSelector((store) => store.user.login.email)
//   const userStreet = useSelector((store) => store.user.login.street)
//   const userPostcode = useSelector((store) => store.user.login.postcode)
//   const userCity = useSelector((store) => store.user.login.city)
//   const userTelephone = useSelector((store) => store.user.login.telephone)
//   const userId = useSelector((store) => store.user.login.userId)

//   //console.log(user)

//   const USERS_URL = `http://localhost:8080/users/${userId}`

//   useEffect(() => {
//     fetch(USERS_URL, {
//       method: 'GET',
//       headers: {
//         Authorization: accessToken,
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         setOrders(json.orderHistory)
//         //console.log(userID)
//       })
//   }, [accessToken, USERS_URL])

//   console.log(userId)

//   return (
//     <ProfileDetails>
//       <Div>
//         <Text>Orders: </Text>

//         {orders && (
//           <div>
//             {orders.map((order) => (
//               <Content key={order._id}>
//                 {order._id} Status: {order.status}
//               </Content>
//             ))}
//           </div>
//         )}
//       </Div>
//       {accessToken && (
//         <Profile>
//           <Titel>Your profile</Titel>

//           <Div>
//             <Text>Name:</Text>
//             <Content>{userName} </Content>
//           </Div>

//           <Div>
//             <Text>Email: </Text>
//             <Content>{userEmail} </Content>
//           </Div>

//           <Div>
//             <Text>Street: </Text>
//             <Content>{userStreet} </Content>
//           </Div>

//           <Div>
//             <Text>PostCode: </Text>
//             <Content>{userPostcode} </Content>
//           </Div>

//           <Div>
//             <Text>City: </Text>
//             <Content>{userCity} </Content>
//           </Div>

//           <Div>
//             <Text>Phone: </Text>
//             <Content>{userTelephone} </Content>
//           </Div>
//         </Profile>
//       )}
//       {!accessToken && history.push('/login')}

//       <Wrapper>
//         <Button title="Signout" onClick={handleSignOut} />
//       </Wrapper>
//     </ProfileDetails>
//   )
// }
