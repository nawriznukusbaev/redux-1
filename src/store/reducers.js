
function reducer(state = [], action) {
    switch (action.type) {
        case 'ADD':
            return [...state,action.value];
        case 'DELETE':
            return state.filter(el => el !== state[action.index]);
        case 'CHANGE':
            state[action.index]=action.value;
            return state;
        default:
            return state;
    }
}

export default reducer;