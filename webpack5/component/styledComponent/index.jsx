import React from 'react'
import styled from 'styled-components'

//css 넣기
const ButtonStyle = {
    'background': 'black',
    'border': 'none',
    'color': '#fff',
    'padding': '7px 14px'
}

// 얘는 컴포넌트로 본다
const Button = styled.button`
    background : #000;
    border : none;
    color : #fff;
    padding : 7px 14px;
`
// 이렇게 만든거 export 해서 쓸 수 도 있다.
const ButtonHover = styled(Button)`
    background : #007bff;
    :hover{
        background : #0069d9;
    }
`

const Index = () => {
    const inputRef = React.useRef()
    const handleClick = () => {
        //console.log(inputRef.current) // 해당 엘리먼트
        inputRef.current.focus()
        //inputRef.current.style.height = '100px'
        if (inputRef.current.style.display === 'none') {
            inputRef.current.style.display = 'inline-block'
        } else {
            inputRef.current.style.display = 'none'
        }
    }
    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button
                    style={ButtonStyle}
                    onClick={handleClick}
                >
                    hello?
                </button>
                <Button onClick={()=>{handleClick()}}>aaaa</Button>      {/* onClick 강제로 주기 익명함수 이용 */}
                <ButtonHover onClick={()=>{handleClick()}}>bbbb</ButtonHover>
            </div>
        </>
    )
}

export default Index