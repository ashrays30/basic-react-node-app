
export default (state = {}, action) => {
    let obj = action.payload;
    switch (action.type) {
        case "VALIDATE_USER_DATA": 
            state = Object.assign({}, state, {status, username});
            break;
    }
    return state;
}