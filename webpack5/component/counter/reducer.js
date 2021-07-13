export const UP = "UP"
export const DOWN = "DOWN"

export const reducer = (number, action) => {
    // 여기서는 변하는 값만 반환해주면 된다.
    switch (action.type) {
        case UP: 
            return number+1;
        case DOWN: 
            return number-1;
        default:
            return number;
    }
}
