import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    } ;
  `
}

export const tablets = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    } ;
  `
}

export const latops = (props) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    } ;
  `
}
