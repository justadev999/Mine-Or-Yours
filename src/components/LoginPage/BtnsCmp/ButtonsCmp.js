import React, {useState, useEffect} from 'react'
import {
  Wrapper,
  LogoImg,
  BtnsUl,
  BtnsWrapper,
  MetamaskBtn,
  WalletConnectBtn,
  Span,
  Wltcntimg,
  AccountP,
  WelcomeP,
  BetForm,
  BetLabel,
  BetInput,
  BetButton
} from './ButtonsCmpCSS'
import LgImg from '../../../images/mine-or-yours.png'
import walletCnt from '../../../images/wallet_connect-icon@2x.png'
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'
import {loadContract} from '../../../Utils/load-contract'

const ButtonsCmp = () => {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract : null
  });
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false)
  const [betValue, setBetValue] = useState('')

  console.log(web3Api)

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();
      const contract = await loadContract('MineOrYours', provider)

      if(provider){
        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract
        })
      } else {
        console.log('Installa Metamask')
      }
    }
    loadProvider()
  }, [])

   const handleChange = (event) => {
    const value = event.target.value;
    setBetValue(value)
  }

  const handleInput = (event) =>  {
    event.preventDefault()
    console.log(`Player betted ${betValue} WLKR`)
  }


  const makeBet = async () => {
    const {contract} = web3Api
    await contract.addBet({
      from : account,
      value : `${betValue}`
    })
  }

  useEffect(() => {
    const getAccount  = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
      console.log(account, isConnected)
    }
    web3Api.web3 &&  getAccount()
  },[account, isConnected, web3Api.web3])

 

  return  <>
  <Wrapper>

    <BtnsUl>
  <LogoImg src={LgImg} />
    {isConnected === false ? <>
      <BtnsWrapper>
    <MetamaskBtn onClick={ async () => {
      const accounts = await window.ethereum.request({method : "eth_requestAccounts"});
      setAccount(accounts[0])
      setIsConnected(true)
    }
    }>Connect Wallet</MetamaskBtn>
    <WalletConnectBtn onClick={makeBet}> <Span> <Wltcntimg src={walletCnt} /></Span> Wallet Connect</WalletConnectBtn>
  </BtnsWrapper>
    </> 
    : <>
<WelcomeP>Welcome player :</WelcomeP>
    <AccountP>{account}</AccountP>
    <BetForm onSubmit={handleInput} >
      <BetLabel>Make Your bet</BetLabel>
      <BetInput 
      onChange={handleChange}
      type="number"
      placeholder="600000 WLKR"
      min="600000"
      />
      {betValue <=  '600000' ? <BetButton onClick={makeBet} disabled   to={'game'}>Bet!</BetButton> :
      <BetButton onClick={makeBet} enabled   to={'game' }>Bet!</BetButton> }
    </BetForm>
     </>}
    </BtnsUl>
  </Wrapper>
    </>
}

export default ButtonsCmp
