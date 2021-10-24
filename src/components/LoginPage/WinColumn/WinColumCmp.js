import React from 'react'
import {
  Wrapper,
  WinUl,
  WinLi,
  WinImg,
  WinLabel,
} from './WinColumnCSS'
import blueFire from '../../../images/blue--fire@2x.png'
import redFire from '../../../images/red--fire@2x.png'
import greenFire from '../../../images/green--fire@2x.png'

const WinColumCmp = () => {
  return <>
  <Wrapper>

<WinUl>
  <WinLi>
    <WinImg src={blueFire} />
    <WinLabel>Wins</WinLabel>
    <WinImg src={redFire} />
  </WinLi>

  <WinLi>
    <WinImg src={greenFire} />
    <WinLabel>Wins</WinLabel>
    <WinImg src={blueFire} />
  </WinLi>

  <WinLi>
    <WinImg src={redFire} />
    <WinLabel>Wins</WinLabel>
    <WinImg src={greenFire} />
  </WinLi>
</WinUl>

</Wrapper>
    </>
}

export default WinColumCmp
