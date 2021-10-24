import React from 'react'
import WarlockLogo from '../../../images/warlock-logo@2x.png'
import {
  Wrapper,
  WarlockImg
} from './warlockDummyCSS'

const WarlockDummyCmp = () => {
  return  <>
  <Wrapper>
    <WarlockImg src={WarlockLogo} />
  </Wrapper>
    </>
}

export default WarlockDummyCmp
