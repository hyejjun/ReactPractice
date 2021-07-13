import React, { useEffect } from 'react'
import Board from './Board'
import styled from 'styled-components'

const GameDiv = styled.div`
    display : flex;
    flex-wrap : wrap;
    align-item : center;
    justify-content : center;
    width : 300px;
`
// handelClick이 실행되면 여기로 호출됨
const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT':
            const { squares } = {...state}
            squares[action.index] = state.xIsNext ? 'O' : 'X'       //action.index = n 
            return {
                ...state,
                xIsNext : !state.xIsNext,
                squares
            }
        case 'WIN' :
            return{
                ...state,
                winner : action.winner
            }
    }
}

const defaultState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null
}

const Winner = (squares) =>{
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,2],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
            console.log(squares[a]);
            return squares[a]
        }
    }
    return null     //승자가 없을때
}

const Game = () => {
    const [state, dispatch] = React.useReducer(reducer, defaultState)
    // Game Component의 상태값을 관리할 수 있도록 하자

    const handleClick = (n) => {
        if(state.squares[n]) return         // 한번 클릭했던거는 다시 내용이 바뀌지 않게됨
        if(state.winner !== null) return    // 승자가 결정되면 끝나게 함
        dispatch({ type: 'NEXT', index: n })
        //console.log(n);
    }

    React.useEffect(()=>{
        //console.log('aaa');     // 한번 찍을 때마다 콘솔 찍힘

        const win = Winner(state.squares)
        if(win !== null){
            dispatch({type:'WIN', winner:win})
        }
    },[state.xIsNext])

    return (
        <>
            <GameDiv>
                <Board
                    squares={state.squares}
                    onClick={handleClick}
                />
            </GameDiv>
            {state.winner ? `${state.winner}님 승리!` : `Next player is ${state.xIsNext ? 'O' : 'X'}`}
        </>
    )
}

export default Game