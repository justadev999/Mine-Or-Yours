import React, {useState, useEffect} from 'react'
import {
  Bg,
  MainWrapper,
  HandsRow,
  StatsRow,
  WarlockImg,
  LogoRow,
  Player1Wrapper,
  Player2Wrapper,
  Hand1,
  Hand2,
  Player1,
  Player2,
  Stats,
  Fires,
  Music,
  WinsLabel,
  DrawsLabel,
  LossesLabel,
  FireImg,
  MineLogo,
  WaitingLabel,
  RewardPool,
  WithdrawButton
} from './GameCmpCSS'
import WarLog from '../../images/warlock-logo@2x.png'
import BlueHand from '../../images/blueHand@2x.png'
import RedHand from '../../images/redHand@2x.png'
import GreenHand from '../../images/greenHand@2x.png'
import BlueFi from '../../images/blue--fire@2x.png'
import RedFi from '../../images/red--fire@2x.png'
import GreenFi from '../../images/green--fire@2x.png'
import MnLogo from '../../images/mine-or-yours.png'


const GameCmp = () => {
  const [fireValue, setFireValue] = useState(null);
  const [myChoice, setMyChoice] = useState(null);
  const [player2Onl , setPlayer2Onl] = useState(false);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(false);
  const [playerWin, setPlayerWin] = useState(false);
  const [winCount, setWin] = useState(0);
  const [lossCount, setLoss] = useState(0);
  const [drawCount, setDraw] = useState(0);
  const [reward, setReward] = useState(0);
  const [counter, setCounter] = useState(3);

  console.log(playerWin, setReward)

  const onMouseEnterBlue = () => {
    setFireValue(BlueHand)
  }
  const onMouseLeaveBlue = () => {
    setFireValue(null)
  }

  const onMouseEnterRed = () => {
    setFireValue(RedHand)
  }
  const onMouseLeaveRed = () => {
    setFireValue(null)
  }

  const onMouseEnterGreen = () => {
    setFireValue(GreenHand)
  }
  const onMouseLeaveGreen = () => {
    setFireValue(null)
  }

  //PLAYER1 CHOICE
  const setChoice = () => {
    setMyChoice(fireValue)
    setPlayerChoice(true);
    console.log(myChoice, "<MYchoice")
  }

  //COMPUTER CHOICE
  const pcChoice = () => {
    const choices = [BlueHand, GreenHand, RedHand];
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
    setPlayer2Onl(true);
  }

  useEffect(() => {
    setTimeout(() => {
      if(playerChoice === true) {
        pcChoice();
      }
    }, 2000)
  },[playerChoice] )

   //GAME LOGIC


  //  useEffect(() => {
  //    if(myChoice && computerChoice) {
  //      result();
  //    }
  //  }, [computerChoice, myChoice])

   
      const result = () => {
        //BLUE FIRE
        if(myChoice === BlueFi && computerChoice === RedFi) {
          setPlayerWin(true);
          setWin(winCount + 1)
          console.log('You won')
   
       } else if(myChoice === BlueFi && computerChoice === GreenFi) {
         setLoss(lossCount + 1)
         console.log('LOSS')
       } else if(myChoice === BlueFi && computerChoice === BlueFi){
         setDraw(drawCount + 1)
       }
        //RED FIRE
        else if(myChoice === BlueFi && computerChoice === GreenFi) {
         setPlayerWin(true);
         setWin(winCount + 1)
         console.log('You won')
       }
      else if(myChoice === RedFi && computerChoice === BlueFi) {
        setLoss(lossCount + 1)
        console.log('LOSS')
      }else if(myChoice === RedFi && computerChoice === RedFi){
        setDraw(drawCount + 1)
      }
      //GREEN FIRE
     else if(myChoice === GreenFi && computerChoice === BlueFi) {
       setPlayerWin(true);
       setWin(winCount + 1)
       console.log('You won')
     }
    else if(myChoice === GreenFi && computerChoice === RedFi) {
      setLoss(lossCount + 1)
      console.log('LOSS')
    } else if(myChoice === GreenFi && computerChoice === GreenFi){
      setDraw(drawCount + 1)
    }
  }

  useEffect(() => {
    const timer = counter > 0 ? setInterval(() => {
      setCounter(counter - 1);
    }, 1000)
    : result();

    return() => {
      clearInterval(timer);
    };
  },)

  return   <>
  <Bg>
    <MainWrapper>

      <LogoRow>
      <WarlockImg src={WarLog} />
      </LogoRow>

      <HandsRow>
        <Player1Wrapper>
          <Player1>You</Player1>
          <Hand1 src={myChoice} />
        </Player1Wrapper>

        <Player2Wrapper>
        <Player2>Player2</Player2> 
          {player2Onl === false ?  <WaitingLabel>Waiting...</WaitingLabel> :   <Hand2 src={computerChoice}  />}
        
        </Player2Wrapper>
      </HandsRow>

      <StatsRow>
        <Stats>
          <WinsLabel>Wins <span>{winCount}</span></WinsLabel>
          <DrawsLabel>Draws <span>{drawCount}</span> </DrawsLabel>
          <LossesLabel>Losses <span>{lossCount}</span> </LossesLabel>
          <RewardPool>Reward Pool <span>{reward}</span> <span> <WithdrawButton>Withdraw</WithdrawButton> </span>  </RewardPool>
        </Stats>

        <Fires>
          <FireImg onClick={setChoice} onMouseEnter={onMouseEnterBlue} onMouseLeave={onMouseLeaveBlue}  src={BlueFi}/>
          <FireImg onClick={setChoice} onMouseEnter={onMouseEnterRed} onMouseLeave={onMouseLeaveRed}  src={RedFi} />
          <FireImg onClick={setChoice} onMouseEnter={onMouseEnterGreen} onMouseLeave={onMouseLeaveGreen}   src={GreenFi} />
        </Fires>

        <Music>
          <MineLogo src={MnLogo} />
        </Music>

      </StatsRow>

    </MainWrapper>
  </Bg>
    </>
}

export default GameCmp
