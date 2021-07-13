import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    width : 33%;
    height : 70px;
    border : 1px solid #000;
    background : #fff;
    cursor : pointer;
    font-size : 24px;
`


const Square = (props) => {
    return (
        <>
            <Button onClick={props.onClick}>
               {props.value}
            </Button>
        </>
    )
}

export default Square