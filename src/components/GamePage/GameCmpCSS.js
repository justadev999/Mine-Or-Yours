
import styled from "styled-components";
import BgImg from "../../images/back--logo.png"

export const Bg = styled.div`
height: 100%;
background: url(${BgImg});
background-repeat: no-repeat;
background-size: cover;
display: flex;
  justify-content: center;
`

export const MainWrapper = styled.div`
width: 100%;
display: grid;
grid-template-rows: repeat(3, 10% 70% 20%);
`

export const LogoRow = styled.div`
max-height: 150px;
display: flex;
justify-content: flex-end;
`
export const WarlockImg = styled.img`
align-self: flex-start;
`

export const HandsRow = styled.div`
display: flex;
justify-content: space-around;
`

export const Player1Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Hand1 = styled.img`
height: 30em;
`

export const Player1 = styled.p`
font-size: 3em;
color: white;
font-weight: 700;
text-shadow: blue 2px 5px;
`

export const Player2Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Player2 = styled.p`
font-size: 3em;
color: white;
font-weight: 700;
text-shadow: red 2px 5px;
`
export const Hand2 = styled.img`
transform: scalex(-1) ;
height: 30em;
`


export const StatsRow = styled.div`
display: grid;
grid-template-columns: repeat(3, 30% 40% 30%);
`

export const Stats = styled.div`
background: #25193b ;
`

export const WinsLabel = styled.p`
font-size: 3rem;
color: #5aff08;
`

export const DrawsLabel = styled.p`
font-size: 3rem;
color: #fff708;
`
export const LossesLabel = styled.div`
font-size: 3rem;
color: #ff1408;
`
export const RewardPool = styled.div`
font-size: 3rem;
color: #cdad00;
`

export const Fires = styled.div`
background: #244975;
display: flex;
align-items: center;
justify-content: space-around;
`

export const FireImg = styled.img`
background: #263361;
margin: 2rem ;
padding: 1rem 3rem;
border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
cursor: pointer;
transition: all 0.4s;
&:hover{
  opacity: 0.9;
  transform: scale(1.1)
}
`

export const Music = styled.div`
background: #25193b;
display: flex;
align-items: center;
`

export const MineLogo = styled.img`
height: 60%;
margin-left: 3rem;
`

export const WaitingLabel = styled.p`
@keyframes glowing {
  0%{transform: scale(1.1)}
  100%{transform: scale(1)}
}

font-size: 3em;
color: white;
font-weight: 700;
text-shadow: red 2px 5px;
animation-name: glowing;
animation-duration: 2s ;
animation-iteration-count:infinite;

`

export const WithdrawButton = styled.button`
margin-bottom: 1rem;
background: #005391;
border: none;
color: white;
font-size: 15px;
padding: 1rem;
border-radius: 50px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
cursor: pointer;
&:hover {
  opacity: 0.9;
}
`