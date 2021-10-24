import React from "react";
import {
  Bg,
  MainWrapper,
  RowOne,
  RowTwo
} from "./MainLoginCss"
import WarlockDummyCmp from './WarlockDummyLogo/WarlockDummyCmp'
import WinColumCmp from './WinColumn/WinColumCmp'
import ButtonsCmp from './BtnsCmp/ButtonsCmp'
import RulesCmp from './RulesCmp/RulesCmp'

const MainLoginComponent = () => {
  return <>
  <Bg >
    <MainWrapper>
      <RowOne> 
        <WarlockDummyCmp />
        </ RowOne>

        <RowTwo>
          <WinColumCmp />
          <ButtonsCmp />
          <RulesCmp />
        </ RowTwo>

    </MainWrapper>
  </Bg>
  </>
}

export default MainLoginComponent