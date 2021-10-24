import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: center;
min-width: 33%;
`

export const WinUl = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const WinLi = styled.li`
display: flex;
align-items: center;
margin: 1rem;

&:hover {
  opacity: 0.9;
}
`

export const WinImg = styled.img`
background: #263361;
padding: 0.8rem 3rem;
border-radius: 12px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.4);
`

export const WinLabel = styled.p`
color: white;
font-weight: 300;
font-size: 2rem;
margin: 1rem;
`