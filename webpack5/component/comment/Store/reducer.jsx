// dispatch 사용되면 실행된다.
// reducer는 결국 상태를 바꿔야 하기 때문에 이전 상태값을 가져와야한다.
// dispatch 에서 바꿀 정보를 받아야함 -> action
// 결국 얘는 리턴을 해주는데 어떤값을 리턴하냐? - 바뀐 상태값 (state 값)

const reducer = (state, action) =>{
    switch(action.type){
        case "CREATE" :
            return {
                ...state,
                commentItem : [...state.commentItem, action.payload]        // 원래 있던 내용 +  새로온 내용
            }
        case "UPDATE" :
            return state
        case "DELETE" :
            return state
        default :
            return state
    }
}

export default reducer