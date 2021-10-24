import React from 'react'
import {
  Wrapper,
  RulesWrapper,
  RockDiv,
  RockImg,
  PolicyLabel,
  AnotherP
} from './RulesCmpCSS'
import RockRule from '../../../images/rockrules.png'


const RulesCmp = () => {
  return <>
  <Wrapper>
    <RulesWrapper>
      <RockDiv>
        <RockImg src={RockRule} />
        <AnotherP>By connecting your wallet you accept</AnotherP>
        <PolicyLabel onClick={() => window.open('https://warlockbnb.finance/policy-and-responsibility-rights/')}>Policy and Responsability Rights</PolicyLabel>
      </RockDiv>
    </RulesWrapper>
  </Wrapper>
    </>
}

export default RulesCmp
