import styled from "styled-components"

export const Container = styled.div`
    width: 24vw;
    height: 63vh;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: "Roboto", sans-serif;
    flex-direction: column;
    background-color: #eff1f2;
    transition: 300ms;
    margin-bottom: 60px;

    &:hover{
        transform: scale(1.04);
        cursor: pointer;
    }
`

export const Image = styled.img`
    object-fit: cover;
    width: 70%;
`

export const Title = styled.h2`
    color: #ABABAB;
    font-weight: 400;
    font-size: 1.6rem;
`