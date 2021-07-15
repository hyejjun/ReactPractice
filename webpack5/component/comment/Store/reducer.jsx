// dispatch 사용되면 실행된다.
// reducer는 결국 상태를 바꿔야 하기 때문에 이전 상태값을 가져와야한다.
// dispatch 에서 바꿀 정보를 받아야함 -> action
// 결국 얘는 리턴을 해주는데 어떤값을 리턴하냐? - 바뀐 상태값 (state 값)

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_COMMENT':     // 최초 실행
            return {
                ...state,
                loading : true,
            }
        case 'GET_COMMENT_SUCCESS':     // 데이터 완전히 받아옴
            return {
                ...state,
                loading: false,
                commentItem : action.payload,
            }    
        case 'GET_COMMENT_ERROR':       // 데이터 읽어오지 못함
            return {
                ...state,
                loading:false,
                error : action.payload
            }
        case "CREATE":
            return {
                ...state,
                commentItem: [...state.commentItem, action.payload]        // 원래 있던 내용 +  새로온 내용
            }
        case "UPDATE":
            /*console.log(action);    // action.payload 에서 index랑 content값을 빼와야함
            let { content, index } = action.payload
            //let { content, index } = {...action.payload}  이렇게 쓰는거랑 같은 - 그냥 쓸줄만 알면됨
            //let {payload : {content,index}} = action
            let {commentItem} = {...state}
            commentItem[index].content = content
            return {
                ...state,
                commentItem : [...commentItem]
            }*/

            let content = action.payload.content;
            let index = action.payload.index;
            let commentItem = state.commentItem   // 복사해서 가져옴

            console.log("commentItem =", commentItem);
            console.log("commentItem[index]=", commentItem[index]);            // index 값이 뭐를 의미하는지
            console.log("commentItem[index].content =", commentItem[index].content);    // 1. 여기서 쓰는 content
            console.log("content = ", content);                       // 2. 여기서 쓰는 content

            commentItem[index].content = content

            return {
                ...state,
                commentItem  // 우리가 복사했던 값으로 바꿔준다
            }
        case "DELETE":
            /*
            //console.log('index', action.payload);
            //console.log(state.commentItem);
            let newArr = [];
            for (let i = 0; i < state.commentItem.length; i++) {
                //console.log(i);
                if(i !== action.payload) newArr.push(state.commentItem[i])
            }
            console.log(newArr, state.commentItem);
            // newArr = 내가 원하는 값을 삭제하고 남은 배열값
            // state.commentItem = 내가 기존에 가지고 있었던 배열값
            */
            return {
                ...state, // 습관처럼 쓰기 - 렌더 발생시키기 위해서
                //commentItem : newArr
                commentItem: [...state.commentItem.filter((v, k) => { action.payload !== k })]
            }
        default:
            return state
    }
}

export default reducer