//비동기 통신에 대한 내용을 넣는 공간 -  함수만 들어가게 될것이다

export const getComment = async (dispatch) => {
    dispatch({ type: 'GET_COMMENT' })     // 나 지금 실행되었어 하고 reducer 한테 알려주는 것

    // 통신 실패시
    try {
        const response = await fetch('http://localhost:3000/api')
        const data = await response.json()

        // 다 받아왔으니까 다시 dispatch로 알려줌
        dispatch({ type: 'GET_COMMENT_SUCCESS', payload: data })
    } catch (e) {
        dispatch({ type: 'GET_COMMENT_ERROR', payload: e })
    }
}