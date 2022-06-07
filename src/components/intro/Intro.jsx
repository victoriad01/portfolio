import React from 'react'
import styled, { keyframes } from 'styled-components'
import mypicture1 from '../../Pictures/my display port new.png'
import { mobile, tablets, latops } from '../../Responsive'

const IntroHeader = styled.h1`
  display: flex;
  height: 100vh;
  ${mobile({ flexDirection: 'column' })}
  ${tablets({ flexDirection: 'column' })}
`
const IntroHeaderLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: 'column' })}
  ${tablets({ flexDirection: 'column' })}
`
const LeftWrapper = styled.div`
  padding: 50px;
  margin-left: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
    height: '50%',
    padding: '20px',
    margin: '20px',
  })}

  ${tablets({
    flexDirection: 'column',
    height: '50%',
    padding: '20px',
    margin: '20px',
  })}

  ${latops({ height: '75%' })}
`
const LeftIntro = styled.h5`
  font-size: 24px;
  font-weight: 200;
  letter-spacing: 0.12rem;
  ${mobile({
    width: '90%',
  })}
`
const LeftName = styled.h1`
  font-size: 50px;
  letter-spacing: 0.12rem;
`
const TitleContainer = styled.div`
  height: 50px;
  overflow: hidden;
`
const move = keyframes`
25%{transform: translateY(-50px)};
50%{transform: translateY(-100px)};
75%{transform: translateY(-150px)};
100%{transform: translateY(-200px)};`

const TitleContainerWrapper = styled.div`
  height: 100%;
  animation: ${move} 20s ease-in-out infinite alternate;
`
const TitleContainerItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: 800;
  color: 'green';
  letter-spacing: 0.3rem;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: '14px', fontWeight: '300' })}
  ${tablets({ fontSize: '18px' })}
  ${latops({ fontSize: '20px' })}
`
const IntroDesc = styled.p`
  font-size: 14px;
  letter-spacing: 0.12rem;
  line-height: 1.5rem;
  ${mobile({ display: 'none' })}
`
const IntroHeaderRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${mobile({ display: 'none' })}
  ${tablets({ display: 'none' })}
`
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 2;
`
const Bg = styled.div`
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  background-color: lightgray;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0%;
`
function Intro() {
  return (
    <IntroHeader>
      <IntroHeaderLeft>
        <LeftWrapper>
          <LeftIntro>Hello, my name is </LeftIntro>
          <LeftName>Victor Iyanu</LeftName>
          <TitleContainer>
            <TitleContainerWrapper>
              <TitleContainerItem>Frontend Developer</TitleContainerItem>
              <TitleContainerItem>Backend Developer</TitleContainerItem>
              <TitleContainerItem>Full Stack Developer</TitleContainerItem>
              <TitleContainerItem>Software Engineer</TitleContainerItem>
            </TitleContainerWrapper>
          </TitleContainer>
          <IntroDesc>
            A self-taught goal driven growing Full-stack Developer with the
            desire to make the world a comfortable place through the provision
            of reliable solutions to real life problems. Gained the confidence
            to contribute to new and ongoing projects.
          </IntroDesc>
        </LeftWrapper>
      </IntroHeaderLeft>
      <IntroHeaderRight>
        <Image src={mypicture1}></Image>
        <Bg></Bg>
      </IntroHeaderRight>
    </IntroHeader>
  )
}

export default Intro
