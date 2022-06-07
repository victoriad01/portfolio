import React from 'react'
import styled from 'styled-components'
import { mobile, tablets, latops } from '../../Responsive'

const Container = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 2px 1px 8px -2px rgba(0, 0, 0, 0.38);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  cursor: pointer;
  ${mobile({ width: '40%', height: '20vh', marginButtom: '0px' })}
  ${tablets({ width: '40%', height: '22vh', marginButtom: '0px' })}
  ${latops({ width: '40%', height: '22vh', marginButtom: '0px' })}
`
const PBroswer = styled.div`
  height: 20px;
  background-color: #bec2c3;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`
const PCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
  margin: 3px;
`
const Link = styled.a``
const Image = styled.img`
  width: 100%;
  transition: all 10s ease;
  &:hover {
    transform: translateY(-100%);
  }
`
function Product({ img, link }) {
  return (
    <Container>
      <PBroswer>
        <PCircle />
        <PCircle />
        <PCircle />
      </PBroswer>
      <Link href={link} target='_blank' rel='noreferrer'>
        <Image src={img}></Image>
      </Link>
    </Container>
  )
}

export default Product
