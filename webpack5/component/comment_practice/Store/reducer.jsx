const reducer = (state, action) => {
    switch (action.type) {
        case "INSERT":
            return {
                ...state,
                commentItem: [...state.commentItem, action.payload]
            }
        case 'UPDATE':
            return state
        case 'DELETE':
            return {
                ...state,
                commentItem : action.payload
            }
        default:
            return state
    }
}
export default reducer