import React from 'react'
import styled from 'styled-components'
import image1 from '../../Pictures/my display port new.png'
import image2 from '../../Pictures/Award-PNG-Transparent.png'
import { mobile, tablets, latops } from '../../Responsive'

const Abt = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: 'column',
    marginTop: '0px',
    marginBottom: '380px',
  })}
  ${tablets({ flexDirection: 'column', marginTop: '0px' })}
  ${latops({ marginTop: '40px' })}
`
const AbtLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  ${mobile({ flexDirection: 'column', marginTop: '0px' })}
  ${tablets({ flexDirection: 'column', marginTop: '0px' })}
`
const AbtCardBg = styled.div`
  background-color: gray;
  position: absolute;
  top: 50;
  left: 50;
  z-index: 2;
  padding-left: 50px;
  ${mobile({ display: 'none' })}
`
const AbtCard = styled.div`
  height: 70vh;
  width: 60%;
  border-radius: 30px;
  background-color: gray;
  position: relative;
  overflow: hidden;

  ${mobile({ height: '30vh', width: '100%' })}
  ${tablets({ height: '50vh', width: '100%' })} 
  ${latops({ width: '80%' })};
`
const AbtCardImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`
const AbtRight = styled.div`
  flex: 1;
  ${mobile({ textAlign: 'center', flexDirection: 'column', marginTop: '0px' })}
  ${tablets({ textAlign: 'center', flexDirection: 'column', marginTop: '0px' })}
  ${latops({ height: '60%', width: '90%' })}
`
const AboutMe = styled.h2`
  margin-bottom: 20px;
  ${mobile({ marginTop: '40px', marginBottom: '0px' })}
  ${tablets({ marginTop: '40px', marginBottom: '0px' })}
`
const CenterAboutMeText = styled.div`
  ${mobile({ display: 'flex', justifyContent: 'center', alignItems: 'center' })}
`
const AboutMeText = styled.p`
  width: 80%;
  line-height: 1.9;
  color: gray;
  ${mobile({
    textAlign: 'justify',
    width: '90%',
    padding: '10px',
    margin: 'auto',
  })}
  ${tablets({
    textAlign: 'justify',
    width: '90%',
    padding: '20px',
    margin: 'auto',
  })}
    ${latops({ width: '95%' })};
`
const AwardSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${mobile({ display: 'none' })}
  ${tablets({ marginTop: '10px', padding: '10px' })}
  ${latops({ marginTop: '30px' })}
`
const ImageWrap = styled.div``
const AwardImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 40px;
  ${mobile({
    width: '50px',
    height: '50px',
    padding: '20px',
    marginRight: '10px',
  })}
`
const StoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const AwardTitle = styled.h4`
  color: gray;
  ${mobile({ textAlign: 'left', fontWeight: '800', fontSize: '14px' })}
  ${tablets({ textAlign: 'left', fontWeight: '800', fontSize: '14px' })}
`
const AwardText = styled.p`
  margin-top: 10px;
  font-size: 12px;
  width: 70%;
  ${mobile({ textAlign: 'left', width: '90%' })}
  ${tablets({ textAlign: 'left', width: '90%' })};
`
function About() {
  return (
    <Abt>
      <AbtLeft>
        <AbtCardBg></AbtCardBg>
        <AbtCard>
          <AbtCardImg src={image1}></AbtCardImg>
        </AbtCard>
      </AbtLeft>
      <AbtRight>
        <AboutMe>About me</AboutMe>
        <CenterAboutMeText>
          <AboutMeText>
            Actively involved in programming for a year and have gained the
            confidence to contribute to new and ongoing projects. Built a
            market/shopping tracker app that allows users to input the items
            they intend to buy alongside with the proposed price. The app also
            allows users to compare prices after the shopping i.e. the proposed
            price versus the real price. Also, built an auto-mart e-commerce
            site with the UI for client side, Admin side, and the backend for
            the whole app. It is an app where users can shop for their preferred
            cars or vehicles.
          </AboutMeText>
        </CenterAboutMeText>
        <AwardSide>
          <ImageWrap>
            <AwardImage src={image2}></AwardImage>
          </ImageWrap>
          <StoryWrap>
            <AwardTitle>Best Developer Award 2021</AwardTitle>
            <AwardText>
              Best Developer Award won in year 2021 for outstanding performance
              in development.
            </AwardText>
          </StoryWrap>
        </AwardSide>
      </AbtRight>
    </Abt>
  )
}

export default About
