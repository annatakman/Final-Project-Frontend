import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Button } from '../components/Button'
import { user } from '../reducers/user'
import { Checkout } from './Checkout'
import { UserProfileProducts } from '../components/UserProfileProducts'

const ProfileDetails = styled.section`
  padding: 20px;
`

const Profile = styled.section``

const Div = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr;
  grid-gap: 6px;
  margin-top: -23px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 2fr 5fr 5fr 5fr 5fr 5fr 5fr 5fr;
    font-size: 18px;
  }
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  width: 100%;

  @media (min-width: 768px) {
    //justify-items: center;
    grid-template-columns: 25%;
    justify-content: center;
  }
`

const Titel = styled.h1``

const Text = styled.h4`
  font-weight: bold;
  margin-top: 16px;
`

const Content = styled.p``

export const ProfilePage = () => {
  const [orders, setOrders] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(user.actions.logout())
  }

  const accessToken = useSelector((store) => store.user.login.accessToken)
  const userName = useSelector((store) => store.user.login.name)
  const userEmail = useSelector((store) => store.user.login.email)
  const userStreet = useSelector((store) => store.user.login.street)
  const userPostcode = useSelector((store) => store.user.login.postcode)
  const userCity = useSelector((store) => store.user.login.city)
  const userTelephone = useSelector((store) => store.user.login.telephone)
  const userId = useSelector((store) => store.user.login.userId)

  //console.log(user)

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
        //console.log(userID)
      })
  }, [accessToken, USERS_URL])

  //console.log(userId)

  return (
    <ProfileDetails>
      <Div>
        <Text>Orders: </Text>

        {orders && (
          <div>
            {orders.map((order) => (
              <Content key={order._id}>
                {order._id} Status: {order.status}
              </Content>
            ))}
          </div>
        )}
      </Div>
      {accessToken && (
        <>
          <Profile>
            <Titel>Your profile</Titel>

            <Div>
              <Text>Name:</Text>
              <Content>{userName} </Content>
            </Div>

            <Div>
              <Text>Email: </Text>
              <Content>{userEmail} </Content>
            </Div>

            <Div>
              <Text>Street: </Text>
              <Content>{userStreet} </Content>
            </Div>

            <Div>
              <Text>PostCode: </Text>
              <Content>{userPostcode} </Content>
            </Div>

            <Div>
              <Text>City: </Text>
              <Content>{userCity} </Content>
            </Div>

            <Div>
              <Text>Phone: </Text>
              <Content>{userTelephone} </Content>
            </Div>
          </Profile>

          <UserProfileProducts />
        </>
      )}
      {!accessToken && history.push('/login')}

      <Wrapper>
        <Button title="Signout" onClick={handleSignOut} />
      </Wrapper>
    </ProfileDetails>
  )
}
