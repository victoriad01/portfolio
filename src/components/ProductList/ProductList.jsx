import React from 'react'
import styled from 'styled-components'
import Product from '../Product/Product'
import { products } from '../../data'
import { mobile, tablets, latops } from '../../Responsive'

import { GitHub } from '@mui/icons-material'
const ProductListContainer = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  ${mobile({ padding: '0px', marginTop: '150px' })}
  ${tablets({ padding: '0px', marginTop: '130px' })}
`
const ListHeader = styled.div`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 85%;
  margin: auto;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
  ${tablets({ marginTop: '90px' })}
  ${latops({ marginTop: '50px' })}
`

const Header = styled.h5`
  font-size: 35px;
  font-weight: 600;
  ${mobile({ fontSize: '20px', fontWeight: '600' })}
  ${latops({ fontSize: '25px', fontWeight: '700' })}
`
const Text = styled.p`
  justify-content: center;
  align-content: center;
  margin: 20px auto;
  width: 60%;
  color: gray;
  ${mobile({ fontSize: '16px', width: '90%', fontWeight: '200' })}
  ${tablets({ fontSize: '16px', width: '80%', fontWeight: '200' })}
  ${latops({ width: '85%' })}
`
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  ${tablets({ width: '100%' })}
`
const GitHubSide = styled.div`
  margin-top: 50px;
  ${mobile({ fontSize: '16px', width: '80%', margin: 'auto' })}
`
const GitHubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 22px;
  ${mobile({ marginTop: '30px', fontSize: '16px' })}
`
const IconAndLink = styled.div`
  display: flex;
  justify-content: center;
`
const GitHubLink = styled.a`
  cursor: pointer;
  color: gray;
  margin-left: 10px;
  ${mobile({ fontSize: '14px' })}
`
function ProductList() {
  return (
    <ProductListContainer>
      <ListHeader>
        <Header>Check through the Jobs Done by me.</Header>
        <Text>
          Browse below the few selected from my works. Do have a walk through my
          portfolio to see amazing frontend and fullstack applications I have
          built.
        </Text>
      </ListHeader>
      <List>
        {products.map((item) => (
          <Product key={item.id} img={item.img} />
        ))}
      </List>
      <GitHubSide>
        <GitHubTitle>Check more with my GitHub Link</GitHubTitle>
        <IconAndLink>
          <GitHub />
          <GitHubLink href='https://github.com/victoriad01'>
            https://github.com/victoriad01
          </GitHubLink>
        </IconAndLink>
      </GitHubSide>
    </ProductListContainer>
  )
}

export default ProductList
