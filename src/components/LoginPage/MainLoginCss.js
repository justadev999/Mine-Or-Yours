import styled from "styled-components"
import BgImg from "../../images/back--logo.png"

export const Bg = styled.div`
height: 100vh;
background: url(${BgImg});
background-repeat: no-repeat;
background-size: cover;
display: flex;
  justify-content: center;

@media (max-width : 1200px){
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}
`

export const MainWrapper = styled.div`
width: 90%;
margin: 1rem;
display: grid;
grid-template-rows: auto 1fr;
`

export const RowOne = styled.div`
`

export const RowTwo = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width : 1100px){
  display: flex;
  flex-direction: column;
}
`